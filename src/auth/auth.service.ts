import * as argon from 'argon2';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDTO } from 'src/users/dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}

  async signUp(
    createUserAuthDTO: CreateUserDTO,
  ): Promise<string> {
    const hash = await argon.hash(
      createUserAuthDTO.password,
    );

    const createdUser =
      await this.usersService.create({
        ...createUserAuthDTO,
        password: hash,
      });

    return createdUser;
  }
}
