import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ModifDon {
  @IsNotEmpty({
    message: 'le champ donateur ne doit pas etre vide',
  })
  @IsString()
  @IsOptional()
  donateur: string;
  @IsNotEmpty({
    message: 'le champ type ne doit pas etre vide',
  })
  @IsOptional()
  @IsString()
  type: string;
  @IsOptional()
  @IsNotEmpty({
    message: 'le champ categorie ne doit pas etre vide',
  })
  @IsString()
  @IsOptional()
  categorie: string;

  @IsOptional()
  @IsNotEmpty({
    message: 'le champ designation ne doit pas etre vide',
  })
  @IsString()
  @IsOptional()
  designation: string;
  @IsOptional()
  @IsNotEmpty({
    message: 'le champ montant ne doit pas etre vide',
  })
  @IsOptional()
  @IsNumber()
  montant: number;

  @IsOptional()
  @IsNotEmpty({
    message: 'le champ devise ne doit pas etre vide',
  })
  @IsOptional()
  @IsString()
  devise: string;
}
