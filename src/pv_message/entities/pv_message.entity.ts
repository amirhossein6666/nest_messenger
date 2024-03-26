import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PvMessage {
  @ApiProperty({ description: 'pv pk', example: 1 })
  @IsNumber()
  pvID: number;

  @ApiProperty({ description: 'message pk', example: 1 })
  @IsNumber()
  messageID: number;
}
