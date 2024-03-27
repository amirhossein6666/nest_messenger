import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Account')
export class AccountEntity {
  @Column()
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  ID: number;

  @Column()
  @ApiProperty({ description: 'account name', example: 'accountName' })
  @IsString()
  name: string;

  @Column()
  @ApiProperty({ description: 'account ID', example: '@amir' })
  @IsString()
  accountID: string;

  @Column()
  @ApiProperty({
    description: 'account profile image',
    example: '996de063-3f1b-4201-b9a1-2da6b32f09c5',
  })
  @IsUUID()
  profile: string;

  @Column()
  @ApiProperty({ description: 'account userId', example: 1 })
  @IsNumber()
  userID: number;

  @Column()
  @ApiProperty({ description: 'is the user is Online', example: false })
  @IsBoolean()
  isOnline: boolean;

  @Column()
  @ApiProperty({
    description: 'account last seen',
    example: '2021-03-12T10:30',
  })
  @IsOptional()
  @IsDateString()
  lastTimeOnline: Date;
}
