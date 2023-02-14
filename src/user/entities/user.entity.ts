import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../user_enum/role';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  id: string;
  @Column({
    length: 55,
  })
  username: string;
  @Column({
    length: 16,
  })
  password: string;
  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: Role.USER,
    default: Role.USER,
  })
  role: string;
}
