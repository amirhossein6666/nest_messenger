import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GroupMessage {
  @ApiProperty({ description: 'group PK', example: 1 })
  @IsNumber()
  groupID: number;

  @ApiProperty({ description: 'message PK', example: 1 })
  @IsNumber()
  messageID: number;
}
