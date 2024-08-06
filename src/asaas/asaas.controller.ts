import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AsaasService } from './asaas.service';
import { CreateClientDto } from './interfaces/create-client.dto';

@Controller('asaas')
export class AsaasController {
  constructor(private readonly asaasService: AsaasService) {}

  @Post('clients')
  async createClient(@Body() createClientDto: CreateClientDto) {
    try {
      const client = await this.asaasService.createClient(createClientDto);
      return client;
    } catch (error) {
      throw new HttpException('Failed to create client on Asaas', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('clients')
  async getAllClients() {
    try {
      const clients = await this.asaasService.getAllClients();
      return clients;
    } catch (error) {
      throw new HttpException('Failed to fetch clients from Asaas', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}