import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './DTO/UserDto';
import { ModifUser } from './DTO/ModifUser';
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./LoginDto";
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async find(id: string) {
    const rdv = await this.userRepository.findBy({
      id: id,
    });
    if (!rdv) {
      throw new NotFoundException(
        `Le rdv correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return rdv;
  }

  //findoneDon
  async getOneDon(id: string) {
    return this.find(id);
  }
  async getAll() {
    const user = await this.userRepository.find();
    if (!user) {
      throw new NotFoundException("Vous n'avez aucun user");
    }
    return user;
  }
  //suppression defimitive
  async deleteOne(id: string) {
    return await this.userRepository.delete(id);
  }
  //suppression partielle
  async bloquer(id: string) {
    return await this.userRepository.softDelete(id);
  }
  async restore(id: string) {
    return await this.userRepository.restore(id);
  }
  //nouveau don
  async nouveauRdv(users: UserDto): Promise<Partial<UserEntity>> {
    //const {username, password,email}=nouveau
    const usert = await this.userRepository.create({
      ...users,
    });
    usert.salt= await bcrypt.genSalt();
    usert.password= await bcrypt.hash(usert.password, usert.salt);
    try{
      await this.userRepository.save(usert)
    }
    catch (e) {
      throw new ConflictException('username ou password doivent etre unique')
    }
    return {
      id:usert.id,
      username: usert.username,
      email: usert.email,
      role: usert.role
    };
  }
  // modification
  async modificationRdv(id: string, userModif: ModifUser): Promise<UserEntity> {
    const user = await this.userRepository.preload({
      id,
      ...userModif,
    });
    if (!user) {
      throw new NotFoundException(
        `Le user correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return await this.userRepository.save(user);
  }
  // connection to database
  async login(credential: LoginDto){
    const {username, password} = credential;
    const user = await this.userRepository.createQueryBuilder("user")
      .where('user.username = :username or user.password = :username',{username})
      .getOne();
    if (!user){
      throw new NotFoundException('username or password sont erroees')
    }
    const hashedPssword= await bcrypt.hash(password, user.salt);
    if (hashedPssword === user.password){
        return {
          id:user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          status: user.status
        }
    }
    else
    {
      throw new NotFoundException("utiisateur n'existe pas")
    }
  }
}
