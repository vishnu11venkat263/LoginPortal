import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IcreateUser } from './schema/createUser.schema';
import { SharedService } from 'src/shared/shared.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('users')
    private users: Model<IcreateUser>,
    private sharedService:SharedService,
  ) {}

  async userCreate(body) {
    const hashedPassword = await this.sharedService.hashPassword(body['password']);
    let formData = {};
    formData['userName'] = body['userName'];
    formData['mailId'] = body['mailId'];
    formData['mobileNumber'] = body['mobileNumber'];
    formData['password'] = hashedPassword;
    const insertData = new this.users(formData);
    const userData = insertData.save();
    if (userData) {
      return { status: true, message: 'User Created Successfully' };
    }
    return { status: false, message: 'User Creation Failed' };
  }


  async loginUser(body) {
    let checkUser = await this.users.find({mailId:body['mailId']}).lean(true);
    if(checkUser.length>0){
      const passwordsMatch = await this.sharedService.comparePasswords(body['password'], checkUser[0]['password']);
      if(passwordsMatch){
        return { status: true, message: 'Login Successfull' };
      }
      return { status: true, message: 'Password Incorrect' };
    }
    return { status: false, message: 'E-Mail Not Found' };
  }
}
