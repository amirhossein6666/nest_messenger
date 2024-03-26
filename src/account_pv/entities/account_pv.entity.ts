import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class AccountPv {
  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  accountId: number;

  @ApiProperty({ description: 'PV PK', example: 1 })
  @IsNumber()
  PVId: number;
}
