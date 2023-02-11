"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeddecinModule = void 0;
const common_1 = require("@nestjs/common");
const meddecin_controller_1 = require("./meddecin.controller");
const meddecin_service_1 = require("./meddecin.service");
const typeorm_1 = require("@nestjs/typeorm");
const meddecin_entity_1 = require("./entities/meddecin.entity");
let MeddecinModule = class MeddecinModule {
};
MeddecinModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([meddecin_entity_1.MeddecinEntity])],
        controllers: [meddecin_controller_1.MeddecinController],
        providers: [meddecin_service_1.MeddecinService],
    })
], MeddecinModule);
exports.MeddecinModule = MeddecinModule;
//# sourceMappingURL=meddecin.module.js.map