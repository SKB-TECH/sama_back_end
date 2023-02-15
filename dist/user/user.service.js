"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async find(id) {
        const rdv = await this.userRepository.findBy({
            id: id,
        });
        if (!rdv) {
            throw new common_1.NotFoundException(`Le rdv correspondant a cet id: ${id} n'existe pas `);
        }
        return rdv;
    }
    async getOneDon(id) {
        return this.find(id);
    }
    async getAll() {
        const user = await this.userRepository.find();
        if (!user) {
            throw new common_1.NotFoundException("Vous n'avez aucun user");
        }
        return user;
    }
    async deleteOne(id) {
        return await this.userRepository.delete(id);
    }
    async bloquer(id) {
        return await this.userRepository.softDelete(id);
    }
    async restore(id) {
        return await this.userRepository.restore(id);
    }
    async nouveauRdv(users) {
        const usert = await this.userRepository.create(Object.assign({}, users));
        usert.salt = await bcrypt.genSalt();
        usert.password = await bcrypt.hash(usert.password, usert.salt);
        try {
            await this.userRepository.save(usert);
        }
        catch (e) {
            throw new common_1.ConflictException('username ou password doivent etre unique');
        }
        return {
            id: usert.id,
            username: usert.username,
            email: usert.email,
            role: usert.role
        };
    }
    async modificationRdv(id, userModif) {
        const user = await this.userRepository.preload(Object.assign({ id }, userModif));
        if (!user) {
            throw new common_1.NotFoundException(`Le user correspondant a cet id: ${id} n'existe pas `);
        }
        return await this.userRepository.save(user);
    }
    async login(credential) {
        const { username, password } = credential;
        const user = await this.userRepository.createQueryBuilder("user")
            .where('user.username = :username or user.password = :username', { username })
            .getOne();
        if (!user) {
            throw new common_1.NotFoundException('username or password sont erroees');
        }
        const hashedPssword = await bcrypt.hash(password, user.salt);
        if (hashedPssword === user.password) {
            const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
                status: user.status
            };
            const jwt = await this.jwtService.sign(payload);
            return {
                access_token: jwt,
            };
        }
        else {
            throw new common_1.NotFoundException("utiisateur n'existe pas");
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map