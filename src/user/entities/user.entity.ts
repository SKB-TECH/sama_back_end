import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role, Status } from '../user_enum/role';
import { TimeStamps } from '../../Times/timestamp.entity';
import { RapportEntity } from 'src/raport/entities/Rapport.entity';
@Entity('user')
export class UserEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 55,
    unique: true,
  })
  username: string;
  @Column({
    unique: true,
  })
  password: string;
  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: string;
  @Column()
  salt: string;
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: string;

  @OneToMany((type) => RapportEntity, (rapport) => rapport.user)
  rapport: RapportEntity[];
}
