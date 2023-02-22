"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaportsModule = void 0;
const common_1 = require("@nestjs/common");
const raports_controller_1 = require("./raports.controller");
const raports_service_1 = require("./raports.service");
let RaportsModule = class RaportsModule {
};
RaportsModule = __decorate([
    (0, common_1.Module)({
        controllers: [raports_controller_1.RaportsController],
        providers: [raports_service_1.RaportsService],
    })
], RaportsModule);
exports.RaportsModule = RaportsModule;
//# sourceMappingURL=raports.module.js.map