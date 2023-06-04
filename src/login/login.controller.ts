import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';


@Controller('login')
export class LoginController {

    constructor(
        private readonly loginService:LoginService
    ){}

 @Post('createUser')
async loginUser(@Body() body,@Res() res){
     let data = await this.loginService.userCreate(body);
     return  res.json(data);
}
    
}
