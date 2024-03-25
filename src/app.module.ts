import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { MessageReplyModule } from './message_reply/message_reply.module';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { AccountContactModule } from './account_contact/account_contact.module';
import { NotificationModule } from './notification/notification.module';
import { PvModule } from './pv/pv.module';
import { GroupModule } from './group/group.module';
import { ChannelModule } from './channel/channel.module';
import { AccountPvModule } from './account_pv/account_pv.module';
import { AccountGroupModule } from './account_group/account_group.module';
import { AccountChannelModule } from './account_channel/account_channel.module';
import { PvAccountMessageModule } from './pv_account_message/pv_account_message.module';
import { GroupAccountMessageModule } from './group_account_message/group_account_message.module';
import { ChannelAccountMessageModule } from './channel_account_message/channel_account_message.module';
import { PvMessageModule } from './pv_message/pv_message.module';
import { GroupMessageModule } from './group_message/group_message.module';
import { ChannelMessageModule } from './channel_message/channel_message.module';

@Module({
  imports: [
    MessageModule,
    MessageReplyModule,
    UserModule,
    AccountModule,
    AccountContactModule,
    NotificationModule,
    PvModule,
    GroupModule,
    ChannelModule,
    AccountPvModule,
    AccountGroupModule,
    AccountChannelModule,
    PvAccountMessageModule,
    GroupAccountMessageModule,
    ChannelAccountMessageModule,
    PvMessageModule,
    GroupMessageModule,
    ChannelMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
