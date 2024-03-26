import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class GroupAccountMessage {
  @ApiProperty({ description: 'group PK', example: 1 })
  @IsNumber()
  channelID: number;

  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  accountID: number;

  @ApiProperty({ description: 'message PK', example: 1 })
  @IsNumber()
  messageID: number;

  @ApiProperty({ description: 'is message read ?', example: false })
  @IsBoolean()
  isRead: boolean;

  @ApiProperty({ description: 'message receive time', example: new Date() })
  @IsDate()
  @IsOptional()
  receiveTime: Date;

  @ApiProperty({ description: 'message seen time', example: new Date() })
  @IsDate()
  @IsOptional()
  seenTime: Date;
}
