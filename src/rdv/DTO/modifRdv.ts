import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class ModifRdv {
  @IsString()
  @IsOptional()
  noms: string;
  @IsString()
  @IsOptional()
  telephone: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  object: string;

  @IsString()
  @IsOptional()
  @IsDate()
  dateRdv: string;
  @IsString()
  @IsOptional()
  heureRdv: string;
  @IsString()
  @IsOptional()
  commentaire: string;
  @IsString()
  @IsOptional()
  status: string;
}
