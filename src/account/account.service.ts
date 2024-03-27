import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountEntity } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepository: Repository<AccountEntity>,
  ) {}

  create(accountEntity: AccountEntity): Promise<AccountEntity> {
    return this.accountRepository.save(accountEntity);
  }

  findAll(): Promise<AccountEntity[]> {
    return this.accountRepository.find();
  }

  findOne(ID: number): Promise<AccountEntity | null> {
    return this.accountRepository.findOneBy({ ID });
  }

  async update(ID: number, accountEntity: AccountEntity): Promise<AccountEntity> {
    await this.accountRepository.update(ID, accountEntity);
    return this.accountRepository.findOneBy({ ID });
  }

  async remove(ID: number): Promise<AccountEntity> {
    const accountToRemove = await this.findOne(ID);
    if (!accountToRemove) {
      throw new NotFoundException('account not found');
    }
    await this.accountRepository.remove(accountToRemove);
    return accountToRemove;
  }
}
