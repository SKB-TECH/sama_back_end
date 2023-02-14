import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
export class RdvDto {
  @IsString()
  @IsNotEmpty({
    message: 'le champ noms ne doit pas etre vide',
  })
  noms: string;
  @IsString()
  @IsNotEmpty({
    message: 'le champ telephone ne doit pas etre vide',
  })
  telephone: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ email ne doit pas etre vide',
  })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ object ne doit pas etre vide',
  })
  object: string;

  @IsString()
  @IsNotEmpty({
    message: 'le champ date ne doit pas etre vide',
  })
  dateRdv: string;
  @IsString()
  @IsNotEmpty({
    message: 'le champ heure ne doit pas etre vide',
  })
  heureRdv: string;
  @IsString()
  @IsOptional()
  commentaire: string;

  @IsString()
  @IsOptional()
  status: string;
}
