import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class AccountPv {
  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  accountID: number;

  @ApiProperty({ description: 'PV PK', example: 1 })
  @IsNumber()
  PVID: number;
}
