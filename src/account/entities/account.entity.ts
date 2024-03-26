import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class Account {
  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'account email',
    example: 'python.developers.ir@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'account name', example: 'accountName' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'account ID', example: '@amir' })
  @IsString()
  accountId: string;

  @ApiProperty({
    description: 'account profile image',
    example: '996de063-3f1b-4201-b9a1-2da6b32f09c5',
  })
  @IsUUID()
  profile: string;

  @ApiProperty({ description: 'account userId', example: 1 })
  @IsNumber()
  userId: number;

  @ApiProperty({ description: 'is the user is Online', example: false })
  @IsBoolean()
  isOnline: boolean;

  @ApiProperty({
    description: 'account last seen',
    example: '2021-03-12T10:30',
  })
  @IsDateString()
  lastSeen: Date;
}
