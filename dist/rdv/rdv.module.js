"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdvModule = void 0;
const common_1 = require("@nestjs/common");
const rdv_controller_1 = require("./rdv.controller");
const rdv_service_1 = require("./rdv.service");
const typeorm_1 = require("@nestjs/typeorm");
const rdd_entities_1 = require("./entity/rdd.entities");
let RdvModule = class RdvModule {
};
RdvModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rdd_entities_1.RdvEntity])],
        controllers: [rdv_controller_1.RdvController],
        providers: [rdv_service_1.RdvService],
    })
], RdvModule);
exports.RdvModule = RdvModule;
//# sourceMappingURL=rdv.module.js.map