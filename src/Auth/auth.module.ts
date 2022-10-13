import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthServices } from "./auth.service";

@Module({
    imports : [PrismaModule],
    controllers : [AuthController],
    providers : [AuthServices]
})
export class AuthModule{}