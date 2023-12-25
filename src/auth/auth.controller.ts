import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  @UseInterceptors(NoFilesInterceptor())
  async signup(
    @Body()
    body: {
      email: 'string';
      password: 'string';
      firstName: 'string';
      lastName: 'string';
    },
  ) {
    return this.authService.signup(
      body.email,
      body.password,
      body.firstName,
      body.lastName,
    );
  }
  @Post('signin')
  @UseInterceptors(NoFilesInterceptor())
  async signin(
    @Body()
    body: {
      email: 'string';
      password: 'string';
    },
  ) {
    return this.authService.signin(body.email, body.password);
  }
}
