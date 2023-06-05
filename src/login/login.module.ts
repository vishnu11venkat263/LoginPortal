import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { createUserInfoSchema } from './schema/createUser.schema';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { SharedService } from 'src/shared/shared.service';

@Module({

    imports: [
        
        MongooseModule.forFeature([
            {name:"users",schema:createUserInfoSchema},
        ]),
         ],
      controllers: [LoginController],
      providers: [LoginService,SharedService],
})
export class LoginModule {

  
}
