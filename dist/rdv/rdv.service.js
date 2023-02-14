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
exports.RdvService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rdv_entity_1 = require("./entities/rdv.entity");
const mailer_1 = require("@nestjs-modules/mailer");
let RdvService = class RdvService {
    constructor(rdvRepository, mailService) {
        this.rdvRepository = rdvRepository;
        this.mailService = mailService;
    }
    async find(id) {
        const rdv = await this.rdvRepository.findBy({
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
        const rdv = await this.rdvRepository.find();
        if (!rdv) {
            throw new common_1.NotFoundException("Vous n'avez aucun rdv");
        }
        return rdv;
    }
    async deleteOne(id) {
        return await this.rdvRepository.delete(id);
    }
    async deletePartielle(id) {
        return await this.rdvRepository.softDelete(id);
    }
    async restore(id) {
        return await this.rdvRepository.restore(id);
    }
    async nouveauRdv(nouveau, med) {
        const rdv = await this.rdvRepository.save(nouveau);
        if (rdv) {
            await this.mailService.sendMail({
                to: 'shakokinyamba201@gmail.com',
                from: 'nani.bommidi93@gmail.com',
                subject: 'Rendez-vous ✔',
                text: 'Welcome NestJS Email Sending Tutorial',
            });
        }
        return rdv;
    }
    async modificationRdv(id, rdvModif) {
        const rdv = await this.rdvRepository.preload(Object.assign({ id }, rdvModif));
        if (!rdv) {
            throw new common_1.NotFoundException(`Le rdv correspondant a cet id: ${id} n'existe pas `);
        }
        return await this.rdvRepository.save(rdv);
    }
};
RdvService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rdv_entity_1.RdvEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService])
], RdvService);
exports.RdvService = RdvService;
//# sourceMappingURL=rdv.service.js.map