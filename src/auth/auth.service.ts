import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<any> {
    return this.userService
      .createUser(firstName, lastName, email, password)
      .then(() => {
        return {
          message: 'User created',
        };
      });
  }
  async signin(email, password): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    return {
      access_token: await this.jwtService.signAsync({
        id: user._id,
        email: user.email,
        firstname: user.firstName,
      }),
    };
  }
  async validateUser(id) {
    const user = await this.userService.getUserById(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
