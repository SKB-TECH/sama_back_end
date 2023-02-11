import { TimeStamps } from '../../Times/timestamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('don')
export class donEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 255 })
  type: string;
  @Column({ length: 255 })
  designation: string;
  @Column()
  montant?: number;
  @Column({ length: 55 })
  devise?: string;
}
