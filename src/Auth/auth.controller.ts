import { Controller, Post } from "@nestjs/common";
import { AuthServices } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authServices : AuthServices){}

    @Post('signup')
    signup() {
        return "I am signed up";
    }

    @Post('signin')
    signin() {
        return "I am signed in"
    }
}