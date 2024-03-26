import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class Message {
  @ApiProperty({ description: 'message PK', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'message content', example: 'hello my friends' })
  @IsString()
  text: string;

  @ApiProperty({ description: 'message send date', example: new Date() })
  @IsDate()
  sendDate: Date;

  @ApiProperty({ description: 'message sender account id', example: 1 })
  @IsNumber()
  senderID: number;

  @ApiProperty({ description: 'is updated', example: false })
  @IsBoolean()
  isUpdated: boolean;

  @ApiProperty({ description: 'message update date', example: new Date() })
  @IsDate()
  @IsOptional()
  updateDate: Date;
}
