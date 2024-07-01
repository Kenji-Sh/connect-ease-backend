import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<string> {
    try {
      return await this.authService.signUp(
        createUserDTO,
      );
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: { ...error },
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
