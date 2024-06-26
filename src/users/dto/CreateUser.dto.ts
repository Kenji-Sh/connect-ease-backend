export class CreateUserDTO {
  readonly name: string;
  readonly username?: string;
  readonly email: string;
  readonly password: string;
  readonly isAvatarImageSet?: string;
  readonly avatarImage?: string;
}
