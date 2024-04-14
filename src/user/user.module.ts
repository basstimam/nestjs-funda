import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

import { StatusService, userStatusService } from './status/status.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService, 
    {
      provide: StatusService,
      useValue: userStatusService
    }
  
  ]
})
export class UserModule {}
