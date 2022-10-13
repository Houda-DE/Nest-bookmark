import { Controller, Post } from "@nestjs/common";
import { AuthServices } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authServices : AuthServices){}

    @Post('signup')
    signup() {
        return {msg : 'hello world!'};
    }

    @Post('signin')
    signin() {
        return "I am signed in"
    }
}