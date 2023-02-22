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
exports.RaportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Rapport_entity_1 = require("./entities/Rapport.entity");
const typeorm_2 = require("@nestjs/typeorm");
let RaportsService = class RaportsService {
    constructor(RapportRepository) {
        this.RapportRepository = RapportRepository;
    }
    async find(id) {
        const don = await this.RapportRepository.findBy({
            id: id,
        });
        if (!don) {
            throw new common_1.NotFoundException(`Le raport correspondant a cet id: ${id} n'existe pas `);
        }
        return don;
    }
    async getOneDon(id) {
        return this.find(id);
    }
    async getAll() {
        const rapport = await this.RapportRepository.find();
        if (!rapport) {
            throw new common_1.NotFoundException("Vous n'avez aucun rapport");
        }
        return rapport;
    }
    async deleteOne(id) {
        return await this.RapportRepository.delete(id);
    }
    async deletePartielle(id) {
        return await this.RapportRepository.softDelete(id);
    }
    async restore(id) {
        return await this.RapportRepository.restore(id);
    }
    async nouveauRapport(nouveau) {
        return await this.RapportRepository.save(nouveau);
    }
    async modificationRapport(id, rapportModif) {
        const donM = await this.RapportRepository.preload(Object.assign({ id }, rapportModif));
        if (!donM) {
            throw new common_1.NotFoundException(`Le don correspondant a cet id: ${id} n'existe pas `);
        }
        return await this.RapportRepository.save(donM);
    }
};
RaportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Rapport_entity_1.RapportEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RaportsService);
exports.RaportsService = RaportsService;
//# sourceMappingURL=raports.service.js.map