import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { IcreateUser } from './schema/createUser.schema';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('users')
    private users: Model<IcreateUser>,
  ) {}

  async userCreate(body) {
    let formData = {};
    formData['title'] = body['title'];
    formData['firstName'] = body['firstName'];
    formData['lastName'] = body['lastName'];
    formData['mailId'] = body['mailId'];
    formData['mobileNumber'] = body['mobileNumber'];
    formData['password'] = body['password'];
    const insertData = new this.users(formData);
    const userData = insertData.save();
    if (userData) {
      return { status: true, message: 'User Created Successfully' };
    }
  }
}
