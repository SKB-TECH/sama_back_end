"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RptsModule = void 0;
const common_1 = require("@nestjs/common");
const rpts_controller_1 = require("./rpts.controller");
const rpts_service_1 = require("./rpts.service");
let RptsModule = class RptsModule {
};
RptsModule = __decorate([
    (0, common_1.Module)({
        controllers: [rpts_controller_1.RptsController],
        providers: [rpts_service_1.RptsService]
    })
], RptsModule);
exports.RptsModule = RptsModule;
//# sourceMappingURL=rpts.module.js.map