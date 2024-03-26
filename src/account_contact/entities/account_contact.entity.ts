import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class AccountContact {
  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  accountID: number;

  @ApiProperty({ description: 'account of contact PK', example: 1 })
  @IsNumber()
  contactID: number;
}
