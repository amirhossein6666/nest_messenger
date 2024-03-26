import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class Notification {
  @ApiProperty({ description: 'notification pk', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'notification account id', example: 1 })
  @IsNumber()
  accountID: number;

  @ApiProperty({
    description: 'notification text',
    example: 'new message from mansoureh',
  })
  @IsString()
  text: string;

  @ApiProperty({ description: 'notification send time', example: new Date() })
  @IsDate()
  sendTime: Date;

  @ApiProperty({ description: 'receive time', example: new Date() })
  @IsDate()
  @IsOptional()
  receiveTime: Date;
}
