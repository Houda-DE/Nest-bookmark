import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthServices } from "./auth.service";

@Module({
    controllers : [AuthController],
    providers : [AuthServices]
})
export class AuthModule{}