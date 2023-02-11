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
exports.DonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const don_entity_1 = require("./entities/don.entity");
const typeorm_2 = require("typeorm");
let DonService = class DonService {
    constructor(donRepository) {
        this.donRepository = donRepository;
    }
    async getOneDon(id) {
        const don = await this.donRepository.findBy({
            id: id,
        });
        if (!don) {
            throw new common_1.NotFoundException(`Le don correspondant a cet id: ${id} n'existe pas `);
        }
        return don;
    }
    async getAll() {
        const don = await this.donRepository.find();
        if (!don) {
            throw new common_1.NotFoundException("Vous n'avez aucun don");
        }
        return don;
    }
    async deleteOne(id) {
        const don = await this.donRepository.findBy({
            id: id,
        });
        return await this.donRepository.delete(id);
    }
};
DonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(don_entity_1.donEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DonService);
exports.DonService = DonService;
//# sourceMappingURL=don.service.js.map