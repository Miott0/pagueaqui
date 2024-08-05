import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  UsersModule } from './user/user.module';
import { AsaasService } from './asaas/asaas.service';
import { AsaasModule } from './asaas/asaas.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsersModule, AsaasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, AsaasService, PrismaService],
})
export class AppModule {}
