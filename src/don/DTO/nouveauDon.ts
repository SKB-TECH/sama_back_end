import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NouveauDon {
  @IsNotEmpty({
    message: 'le champ donateur ne doit pas etre vide',
  })
  @IsString()
  donateur: string;

  @IsNotEmpty({
    message: 'le champ adresse ne doit pas etre vide',
  })
  @IsString()
  adresse: string;
  @IsNotEmpty({
    message: 'le champ type ne doit pas etre vide',
  })
  @IsNotEmpty({
    message: 'le champ telephone ne doit pas etre vide',
  })
  @IsString()
  telephone: string;
  @IsString()
  type: string;

  @IsNotEmpty({
    message: 'le champ categorie ne doit pas etre vide',
  })
  @IsString()
  categorie: string;

  @IsNotEmpty({
    message: 'le champ designation ne doit pas etre vide',
  })
  @IsString()
  designation: string;

  @IsNotEmpty({
    message: 'le champ montant ne doit pas etre vide',
  })
  @IsNumber()
  montant: number;

  @IsNotEmpty({
    message: 'le champ devise ne doit pas etre vide',
  })
  @IsString()
  devise: string;
}
