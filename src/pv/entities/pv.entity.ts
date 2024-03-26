import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class Pv {
  @ApiProperty({ description: 'pv pk', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'messages number', example: 1 })
  @IsNumber()
  messageNumber: number;
}
