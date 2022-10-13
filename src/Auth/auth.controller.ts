import { Controller, Post } from "@nestjs/common";
import { AuthServices } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authServices : AuthServices){}

    @Post('signup')
    signup() {
        return this.authServices.signup();
    }

    @Post('signin')
    signin() {
        return this.authServices.signin();
    }
}