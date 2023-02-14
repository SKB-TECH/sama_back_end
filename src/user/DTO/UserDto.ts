import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty({
    message: 'le champ username ne doit pas etre vide !',
  })
  @IsString()
  username: string;

  @IsNotEmpty({
    message: 'le champ password ne doit pas etre vide !!',
  })
  @IsString()
  @MaxLength(16)
  @MinLength(8)
  password: string;

  @IsNotEmpty({
    message: 'le champ email ne doit pas etre vide !',
  })
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  role: string;

  @IsOptional()
  @IsString()
  status: string;
}
