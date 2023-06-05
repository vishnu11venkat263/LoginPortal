import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()

export class SharedService {
    constructor() {}
    async hashPassword(password: string) {
        const saltRounds = 10; // Number of salt rounds for bcrypt to use
      
        const hashedPassword = await bcrypt.hash(password, saltRounds);
      
        return hashedPassword;
      }

      async comparePasswords(plainTextPassword: string, hashedPassword: any): Promise<boolean> {
        const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
      
        return isMatch;
      }
      
      
}
