import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class Channel {
  @ApiProperty({ description: 'channel PK', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'channel name', example: 'channelName' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'channel profile image',
    example: '996de063-3f1b-4201-b9a1-2da6b32f09c5',
  })
  @IsUUID()
  profile: string;

  @ApiProperty({ description: 'channel ID', example: '@footbal' })
  @IsString()
  channelID: string;

  @ApiProperty({ description: 'message number', example: 10 })
  @IsNumber()
  messageNumber: number;
}
