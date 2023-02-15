import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InterfacePayload } from '../Interface/interfacePayload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userRepository;
    constructor(configService: ConfigService, userRepository: Repository<UserEntity>);
    validate(payload: InterfacePayload): Promise<UserEntity>;
}
export {};
