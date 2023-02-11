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
exports.MeddecinService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const meddecin_entity_1 = require("./entities/meddecin.entity");
const typeorm_2 = require("@nestjs/typeorm");
let MeddecinService = class MeddecinService {
    constructor(meddecinRepository) {
        this.meddecinRepository = meddecinRepository;
    }
    async find(id) {
        const med = await this.meddecinRepository.findBy({
            id: id,
        });
        if (!med) {
            throw new common_1.NotFoundException(`Le meddecin correspondant a cet id: ${id} n'existe pas `);
        }
        return med;
    }
    async getOneDon(id) {
        return this.find(id);
    }
    async getAll() {
        const meds = await this.meddecinRepository.find();
        if (!meds) {
            throw new common_1.NotFoundException("Vous n'avez aucun meddecins");
        }
        return meds;
    }
    async deleteOne(id) {
        return await this.meddecinRepository.delete(id);
    }
    async deletePartielle(id) {
        return await this.meddecinRepository.softDelete(id);
    }
    async restore(id) {
        return await this.meddecinRepository.restore(id);
    }
    async nouveauDon(nouveau) {
        return await this.meddecinRepository.save(nouveau);
    }
    async modificationDon(id, donModif) {
        const medM = await this.meddecinRepository.preload(Object.assign({ id }, donModif));
        if (!medM) {
            throw new common_1.NotFoundException(`Le meddecin correspondant a cet id: ${id} n'existe pas `);
        }
        return await this.meddecinRepository.save(medM);
    }
};
MeddecinService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(meddecin_entity_1.MeddecinEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MeddecinService);
exports.MeddecinService = MeddecinService;
//# sourceMappingURL=meddecin.service.js.map