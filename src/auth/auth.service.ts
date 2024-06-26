import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDTO } from 'src/users/dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}

  signUp(createUserAuthDTO: CreateUserDTO) {
    return { ...createUserAuthDTO };
  }
}
