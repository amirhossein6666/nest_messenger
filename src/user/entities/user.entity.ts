import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class User {
  @ApiProperty({ description: 'user pk', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'user name', example: 'username' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'user email', example: '<EMAIL>' })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'user password', example: '<PASSWORD>' })
  @IsString()
  password: string;
}
