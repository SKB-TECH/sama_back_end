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
let DonController = class DonController {
    constructor(donService) {
        this.donService = donService;
    }
    async getOneDon(id) {
        return await this.donService.getOneDon(id);
    }
};
__decorate([
    (0, common_1.Get)('oneDon/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DonController.prototype, "getOneDon", null);
DonController = __decorate([
    (0, common_1.Controller)('don'),
    __metadata("design:paramtypes", [don_service_1.DonService])
], DonController);
exports.DonController = DonController;
//# sourceMappingURL=don.controller.js.map