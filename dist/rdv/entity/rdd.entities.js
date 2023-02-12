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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdvEntity = void 0;
const typeorm_1 = require("typeorm");
let RdvEntity = class RdvEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RdvEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], RdvEntity.prototype, "noms", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 25,
    }),
    __metadata("design:type", String)
], RdvEntity.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], RdvEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], RdvEntity.prototype, "object", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RdvEntity.prototype, "dateRdv", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RdvEntity.prototype, "heureRdv", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RdvEntity.prototype, "commentaire", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RdvEntity.prototype, "idmeddecin", void 0);
RdvEntity = __decorate([
    (0, typeorm_1.Entity)('rdv')
], RdvEntity);
exports.RdvEntity = RdvEntity;
//# sourceMappingURL=rdd.entities.js.map