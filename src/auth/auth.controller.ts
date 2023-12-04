import { Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  @Get('users')
  getusers() {
    return this.authService.signin();
  }

  @Put('updated')
  updateuser() {
    return this.authService.signup();
  }

  @Delete('users')
  deleteuser() {
    return this.authService.signup();
  }
}
