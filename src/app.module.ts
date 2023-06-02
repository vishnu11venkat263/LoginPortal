import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
   
    MongooseModule.forRoot('mongodb://login:123@localhost:27017/login'),
     LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
