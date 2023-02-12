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
exports.RdvController = void 0;
const common_1 = require("@nestjs/common");
const rdv_service_1 = require("./rdv.service");
const RdvDto_1 = require("./DTO/RdvDto");
const modifRdv_1 = require("./DTO/modifRdv");
let RdvController = class RdvController {
    constructor(rdvService) {
        this.rdvService = rdvService;
    }
    async nouveau(rdv) {
        return await this.rdvService.nouveauRdv(rdv);
    }
    async getOneDon(id) {
        return await this.rdvService.getOneDon(id);
    }
    async getAllDon() {
        return await this.rdvService.getAll();
    }
    async deleteOne(id) {
        return await this.rdvService.deleteOne(id);
    }
    async deleteDefinitive(id) {
        return await this.rdvService.deletePartielle(id);
    }
    async restore(id) {
        return await this.rdvService.restore(id);
    }
    async updateCv(modifier, id) {
        return await this.rdvService.modificationRdv(id, modifier);
    }
};
__decorate([
    (0, common_1.Post)('nouveau/:id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RdvDto_1.RdvDto]),
    __metadata("design:returntype", Promise)
], RdvController.prototype, "nouveau", null);
__decorate([
    (0, common_1.Get)('oneRdv/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RdvController.prototype, "getOneDon", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RdvController.prototype, "getAllDon", null);
__decorate([
    (0, common_1.Delete)('deleteOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RdvController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Delete)('deletePartielle/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RdvController.prototype, "deleteDefinitive", null);
__decorate([
    (0, common_1.Get)('restore/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RdvController.prototype, "restore", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [modifRdv_1.ModifRdv, String]),
    __metadata("design:returntype", Promise)
], RdvController.prototype, "updateCv", null);
RdvController = __decorate([
    (0, common_1.Controller)('rdv'),
    __metadata("design:paramtypes", [rdv_service_1.RdvService])
], RdvController);
exports.RdvController = RdvController;
//# sourceMappingURL=rdv.controller.js.map