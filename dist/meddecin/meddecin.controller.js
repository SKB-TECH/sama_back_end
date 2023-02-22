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
exports.MeddecinController = void 0;
const common_1 = require("@nestjs/common");
const meddecin_service_1 = require("./meddecin.service");
const nouveauMeddecin_1 = require("./DTO/nouveauMeddecin");
const meddecinModif_1 = require("./DTO/meddecinModif");
const jwt_auth_guards_1 = require("../user/Guards/jwt-auth.guards");
let MeddecinController = class MeddecinController {
    constructor(meddecinService) {
        this.meddecinService = meddecinService;
    }
    async nouveau(med) {
        return await this.meddecinService.nouveauDon(med);
    }
    async getOneDon(id) {
        return await this.meddecinService.getOneMed(id);
    }
    async getAllDon() {
        return await this.meddecinService.getAll();
    }
    async deleteOne(id) {
        return await this.meddecinService.deleteOne(id);
    }
    async deleteDefinitive(id) {
        return await this.meddecinService.deletePartielle(id);
    }
    async restore(id) {
        return await this.meddecinService.restore(id);
    }
    async updateCv(modifier, id) {
        return await this.meddecinService.modificationMed(id, modifier);
    }
};
__decorate([
    (0, common_1.Post)('nouveau'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nouveauMeddecin_1.NouveauMeddecin]),
    __metadata("design:returntype", Promise)
], MeddecinController.prototype, "nouveau", null);
__decorate([
    (0, common_1.Get)('oneMed/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeddecinController.prototype, "getOneDon", null);
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MeddecinController.prototype, "getAllDon", null);
__decorate([
    (0, common_1.Delete)('deleteOne/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeddecinController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Delete)('deletePartielle/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeddecinController.prototype, "deleteDefinitive", null);
__decorate([
    (0, common_1.Get)('restore/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeddecinController.prototype, "restore", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meddecinModif_1.MeddecinModif, String]),
    __metadata("design:returntype", Promise)
], MeddecinController.prototype, "updateCv", null);
MeddecinController = __decorate([
    (0, common_1.Controller)('meddecin'),
    __metadata("design:paramtypes", [meddecin_service_1.MeddecinService])
], MeddecinController);
exports.MeddecinController = MeddecinController;
//# sourceMappingURL=meddecin.controller.js.map