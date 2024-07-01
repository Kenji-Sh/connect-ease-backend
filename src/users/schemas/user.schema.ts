import {
  Schema,
  Prop,
  SchemaFactory,
} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, min: 3 })
  name: string;

  @Prop({ required: false, min: 3 })
  username: string;

  @Prop({ required: true, unique: true, max: 80 })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isAvatarImageSet: boolean;

  @Prop({ default: '' })
  avatarImage: string;

  @Prop({ default: Date.now })
  updated: Date;
}

export const UserSchema =
  SchemaFactory.createForClass(User);

UserSchema.plugin(uniqueValidator, {
  message: 'User already exists',
});
