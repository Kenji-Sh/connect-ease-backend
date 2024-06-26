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
  ): Promise<User> {
    const createdUser = new this.userModel(
      createUserDTO,
    );
    return createdUser.save();
  }
}
