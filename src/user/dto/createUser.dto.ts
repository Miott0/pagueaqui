
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @Length(11, 11, { message: 'CPF must be 11 characters long' })
  readonly cpf: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsOptional()
  readonly validAt?: Date;

  @IsOptional()
  @IsString()
  readonly idAsaas?: string;
}