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
exports.RaportController = void 0;
const common_1 = require("@nestjs/common");
const raports_service_1 = require("./raports.service");
const jwt_auth_guards_1 = require("../user/Guards/jwt-auth.guards");
const NouveauRapport_1 = require("./DTO/NouveauRapport");
const ModifRapport_1 = require("./DTO/ModifRapport");
let RaportController = class RaportController {
    constructor(RapportService) {
        this.RapportService = RapportService;
    }
    async nouveau(rapport, request) {
        const user = request.user;
        return await this.RapportService.nouveauRapport(rapport, user);
    }
    async getOneDon(id) {
        return await this.RapportService.getOneDon(id);
    }
    async getAll() {
        return await this.RapportService.getAll();
    }
    async deleteOne(id) {
        return await this.RapportService.deleteOne(id);
    }
    async deleteDefinitive(id) {
        return await this.RapportService.deletePartielle(id);
    }
    async restore(id) {
        return await this.RapportService.restore(id);
    }
    async updateCv(modifier, id) {
        return await this.RapportService.modificationRapport(id, modifier);
    }
};
__decorate([
    (0, common_1.Post)('nouveau'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NouveauRapport_1.NouveauRapport, Object]),
    __metadata("design:returntype", Promise)
], RaportController.prototype, "nouveau", null);
__decorate([
    (0, common_1.Get)('oneRapport/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RaportController.prototype, "getOneDon", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RaportController.prototype, "getAll", null);
__decorate([
    (0, common_1.Delete)('deleteOne/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RaportController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Delete)('deletePartielle/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RaportController.prototype, "deleteDefinitive", null);
__decorate([
    (0, common_1.Get)('restore/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RaportController.prototype, "restore", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ModifRapport_1.ModifRapport, String]),
    __metadata("design:returntype", Promise)
], RaportController.prototype, "updateCv", null);
RaportController = __decorate([
    (0, common_1.Controller)('raports'),
    __metadata("design:paramtypes", [raports_service_1.RaportService])
], RaportController);
exports.RaportController = RaportController;
//# sourceMappingURL=raports.controller.js.map