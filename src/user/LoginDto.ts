import { IsNotEmpty, IsString } from 'class-validator';
export class LoginDto {
  @IsNotEmpty({
    message: 'pas des champs vide svp !!',
  })
  @IsString()
  username: string;
  @IsNotEmpty({
    message: 'pas des champs vide svp !!',
  })
  @IsString()
  password: string;
}
