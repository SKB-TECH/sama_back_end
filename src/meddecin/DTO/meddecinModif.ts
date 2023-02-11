import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class MeddecinModif {
  @IsNotEmpty({
    message: 'le champ noms ne doit pas etre vide',
  })
  @IsOptional()
  @IsString()
  noms: string;

  @IsNotEmpty({
    message: 'le champ sexe ne doit pas etre vide',
  })
  @IsString()
  @IsOptional()
  sexe: string;

  @IsNotEmpty({
    message: 'le champ telephone ne doit pas etre vide',
  })
  @IsString()
  @IsOptional()
  telephone: string;

  @IsNotEmpty({
    message: 'le champ email ne doit pas etre vide',
  })
  @IsOptional()
  @IsString()
  @IsEmail()
  eamil: string;
  @IsOptional()
  @IsNotEmpty({
    message: 'le champ specialite ne doit pas etre vide',
  })
  @IsString()
  specialite: string;
  @IsOptional()
  @IsNotEmpty({
    message: 'le champ email ne doit pas etre vide',
  })
  @IsString()
  @IsEmail()
  @IsOptional()
  photo: string;
}
