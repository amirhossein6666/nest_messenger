import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class MessageReply {
  @ApiProperty({ description: 'message PK', example: 1 })
  @IsNumber()
  messageID: number;

  @ApiProperty({ description: 'reply message pk', example: 1 })
  @IsNumber()
  replyID: number;
}
