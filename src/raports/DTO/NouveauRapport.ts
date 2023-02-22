import { IsOptional, IsString } from 'class-validator';
export class NouveauRapport {
  @IsOptional()
  @IsString()
  noms: string;

  @IsOptional()
  @IsString()
  objet: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  medeccin: [];
}
