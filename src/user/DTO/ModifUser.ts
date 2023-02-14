import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ModifUser {
  @IsString()
  @IsOptional()
  username: string;
  @IsOptional()
  @IsString()
  @MaxLength(16)
  @MinLength(8)
  @IsOptional()
  password: string;
  @IsOptional()
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
