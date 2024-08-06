import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AsaasService } from './asaas.service';
import { AsaasController } from './asaas.controller';

@Module({
  imports: [ConfigModule], // Importa o ConfigModule
  providers: [AsaasService],
  controllers: [AsaasController], // Registra o AsaasController
  exports: [AsaasService],
})
export class AsaasModule {}