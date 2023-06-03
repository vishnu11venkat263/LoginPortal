import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';
require('dotenv').config();

@Module({
  imports: [
    // 'mongodb://login:123@localhost:27017/login'
    MongooseModule.forRoot(process.env.MONGO_URI),
    // const conn = await mongoose.connect(process.env.MONGO_URI)
     LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

   connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}
