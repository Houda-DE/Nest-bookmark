import { Body, ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable({})
export class AuthServices {
    constructor(private prisma : PrismaService){}
    signin(dto : AuthDto){
        return {msg : 'Sign in'}
    }
    async signup(dto : AuthDto){
        const hash = await argon.hash(dto.password)
        try {
            const user = await this.prisma.user.create({
                data : {
                    email : dto.email,
                    hash,
                },
            })
            return user;
        }
        catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                //P2002 sends to duplicate users
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Credential taken')
                }
            }
            throw error
        }
    }
} 