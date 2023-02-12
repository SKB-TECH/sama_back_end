import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class NouveauMeddecin {
  @IsNotEmpty({
    message: 'le champ noms ne doit pas etre vide',
  })
  @IsString()
  noms: string;

  @IsNotEmpty({
    message: 'le champ sexe ne doit pas etre vide',
  })
  @IsString()
  sexe: string;

  @IsNotEmpty({
    message: 'le champ telephone ne doit pas etre vide',
  })
  @IsString()
  telephone: string;

  @IsNotEmpty({
    message: 'le champ email ne doit pas etre vide',
  })
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: 'le champ specialite ne doit pas etre vide',
  })
  @IsString()
  specialite: string;
  @IsString()
  @IsOptional()
  photo: string;
}
