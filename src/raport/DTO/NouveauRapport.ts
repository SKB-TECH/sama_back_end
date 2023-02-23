import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
export class NouveauRapport {
  @IsOptional()
  @IsString()
  @IsNotEmpty({
    message: 'le champ noms ne doit pas etre vide',
  })
  patient: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({
    message: 'le champ objet ne doit pas etre vide',
  })
  objet: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({
    message: 'le champ description ne doit pas etre vide',
  })
  description: string;

  @IsOptional()
  medeccin: [];
}
