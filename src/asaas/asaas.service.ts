import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreateClientDto } from './interfaces/create-client.dto';

@Injectable()
export class AsaasService {
  private axiosInstance: AxiosInstance;

  constructor(private configService: ConfigService) {
    const asaasApiKey = this.configService.get<string>('ASAAS_KEY');
    console.log(asaasApiKey)
    
    this.axiosInstance = axios.create({
      baseURL: 'https://sandbox.asaas.com/api/v3', // URL base do ambiente sandbox do Asaas
      headers: {
        'Content-Type': 'application/json',
        'access_token': "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwODYyNzg6OiRhYWNoX2RjMjg1ODMyLTY5ZDMtNGFjYi1hNWRmLTY5NzcyMDA0YTgyMw==",
        'User-Agent': 'Pague Aqui'
      },
    });
  }

  async createClient(createClientDto: CreateClientDto): Promise<any> {
    try {
      const response = await this.axiosInstance.post('/customers', createClientDto);
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to create client on Asaas', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  async getAllClients(): Promise<any[]>{
    try{
      const response = await this.axiosInstance.get('/customers')
      return response.data // asaas retorna os dados do clinte
    }catch(error){
      console.log("chegou aqui")
      throw new HttpException('Failed to fetch clients from Asaas', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
