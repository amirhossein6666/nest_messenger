import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';
enum role {
  member = 'member',
  admin = 'admin',
  owner = 'owner',
}
export class AccountChannel {
  @ApiProperty({ description: 'Account PK', example: 1 })
  @IsNumber()
  accountId: number;

  @ApiProperty({ description: 'channel PK', example: 1 })
  @IsNumber()
  channelId: number;

  @ApiProperty({
    description: 'the role of account in the channel',
    example: 'member',
  })
  @IsEnum(role)
  role: string;
}
