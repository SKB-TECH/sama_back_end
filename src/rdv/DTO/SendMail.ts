import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendMail {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
