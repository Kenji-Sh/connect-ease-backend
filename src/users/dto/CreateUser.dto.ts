import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsNotEmpty()
  @IsOptional()
  @MinLength(3)
  readonly username?: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(80)
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsBoolean()
  @IsOptional()
  readonly isAvatarImageSet?: string;

  @IsString()
  @IsOptional()
  readonly avatarImage?: string;
}
