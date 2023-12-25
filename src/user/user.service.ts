import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/mongo/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    const user = new this.userModel({
      firstName,
      lastName,
      email,
      password,
    });
    await user.save();
    return user;
  }
  async getUserByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async getUserById(id: string) {
    return this.userModel.findById(id);
  }
}
