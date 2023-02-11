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
exports.DonController = void 0;
const common_1 = require("@nestjs/common");
const don_service_1 = require("./don.service");
const nouveauDon_1 = require("./DTO/nouveauDon");
const modifDon_1 = require("./DTO/modifDon");
let DonController = class DonController {
    constructor(donService) {
        this.donService = donService;
    }
    async nouveau(don) {
        return await this.donService.nouveauDon(don);
    }
    async getOneDon(id) {
        return await this.donService.getOneDon(id);
    }
    async getAllDon() {
        return await this.donService.getAll();
    }
    async deleteOne(id) {
        return await this.donService.deleteOne(id);
    }
    async deleteDefinitive(id) {
        return await this.donService.deletePartielle(id);
    }
    async restore(id) {
        return await this.donService.restore(id);
    }
    async updateCv(modifier, id) {
        return await this.donService.modificationDon(id, modifier);
    }
};
__decorate([
    (0, common_1.Post)('nouveau'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nouveauDon_1.NouveauDon]),
    __metadata("design:returntype", Promise)
], DonController.prototype, "nouveau", null);
__decorate([
    (0, common_1.Get)('oneDon/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonController.prototype, "getOneDon", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonController.prototype, "getAllDon", null);
__decorate([
    (0, common_1.Delete)('deleteOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Delete)('deletePartielle/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonController.prototype, "deleteDefinitive", null);
__decorate([
    (0, common_1.Get)('restore/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonController.prototype, "restore", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [modifDon_1.ModifDon, String]),
    __metadata("design:returntype", Promise)
], DonController.prototype, "updateCv", null);
DonController = __decorate([
    (0, common_1.Controller)('don'),
    __metadata("design:paramtypes", [don_service_1.DonService])
], DonController);
exports.DonController = DonController;
//# sourceMappingURL=don.controller.js.map