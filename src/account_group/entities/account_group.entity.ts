import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';
enum role {
  member = 'member',
  admin = 'admin',
  owner = 'owner',
}
export class AccountGroup {
  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  accountId: number;

  @ApiProperty({ description: 'group PK', example: 1 })
  @IsNumber()
  groupId: number;

  @ApiProperty({
    description: 'the role of account in the group',
    example: 'member',
  })
  @IsEnum(role)
  role: string;
}
