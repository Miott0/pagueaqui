import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  UsersModule } from './user/user.module';
import { AsaasService } from './asaas/asaas.service';
import { AsaasModule } from './asaas/asaas.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, AsaasModule, PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true, // Torna o ConfigModule global para que ele esteja disponível em todo o aplicativo
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AsaasService, PrismaService],
})
export class AppModule {}
