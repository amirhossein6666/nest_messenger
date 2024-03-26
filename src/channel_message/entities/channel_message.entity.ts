import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ChannelMessage {
  @ApiProperty({ description: 'channel PK', example: 1 })
  @IsNumber()
  channelID: number;

  @ApiProperty({ description: 'message PK', example: 1 })
  @IsNumber()
  messageID: number;
}
