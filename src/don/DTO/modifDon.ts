import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ModifDon {
  @IsNotEmpty({
    message: 'le champ donateur ne doit pas etre vide',
  })
  @IsString()
  @IsOptional()
  donateur: string;
  @IsString()
  @IsOptional()
  adresse: string;
  @IsString()
  @IsOptional()
  telephone: string;
  @IsOptional()
  @IsString()
  type: string;
  @IsString()
  @IsOptional()
  categorie: string;

  @IsOptional()
  @IsString()
  designation: string;
  @IsOptional()
  @IsNumber()
  montant: number;
  @IsOptional()
  @IsString()
  devise: string;
}
