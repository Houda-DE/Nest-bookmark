import { Body, Controller, Post, ParseIntPipe } from "@nestjs/common";
import { Request } from "express";
import { AuthServices } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private authServices : AuthServices){}

    @Post('signup')
    signup(@Body() dto : AuthDto) {
        console.log({dto,})
        return this.authServices.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto : AuthDto) {
        return this.authServices.signin(dto);
    }
}