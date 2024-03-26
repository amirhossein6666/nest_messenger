import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class PvAccountMessage {
  @ApiProperty({ description: 'pv pk', example: 1 })
  @IsNumber()
  pvID: number;

  @ApiProperty({ description: 'account pk', example: 1 })
  @IsNumber()
  accountID: number;

  @ApiProperty({ description: 'message pk', example: 1 })
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
