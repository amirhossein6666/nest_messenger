import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class Group {
  @ApiProperty({ description: 'group PK', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'group name', example: 'channelName' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'group profile image',
    example: '996de063-3f1b-4201-b9a1-2da6b32f09c5',
  })
  @IsUUID()
  profile: string;

  @ApiProperty({ description: 'group ID', example: '@friends' })
  @IsString()
  channelID: string;

  @ApiProperty({ description: 'message number', example: 10 })
  @IsNumber()
  messageNumber: number;
}
