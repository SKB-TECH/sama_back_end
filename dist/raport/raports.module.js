"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaportModule = void 0;
const common_1 = require("@nestjs/common");
const raports_controller_1 = require("./raports.controller");
const raports_service_1 = require("./raports.service");
const typeorm_1 = require("@nestjs/typeorm");
const Rapport_entity_1 = require("./entities/Rapport.entity");
let RaportModule = class RaportModule {
};
RaportModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Rapport_entity_1.RapportEntity])],
        controllers: [raports_controller_1.RaportController],
        providers: [raports_service_1.RaportService],
    })
], RaportModule);
exports.RaportModule = RaportModule;
//# sourceMappingURL=raports.module.js.map