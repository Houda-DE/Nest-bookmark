import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthServices {
    constructor(private prisma : PrismaService){}
    signin(){
        return {msg : 'Sign in'}
    }
    signup(){
        return {msg : 'Sign up'};
    }
}