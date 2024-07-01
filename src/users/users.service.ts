import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDTO } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(
    createUserDTO: CreateUserDTO,
  ): Promise<string> {
    const createdUser = new this.userModel(
      createUserDTO,
    );

    try {
      await createdUser.save();
      return createdUser.id;
    } catch (error) {
      throw error.errors;
    }
  }
}
