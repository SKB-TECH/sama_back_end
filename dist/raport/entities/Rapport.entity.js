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
exports.RapportEntity = void 0;
const typeorm_1 = require("typeorm");
const timestamp_entity_1 = require("../../Times/timestamp.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let RapportEntity = class RapportEntity extends timestamp_entity_1.TimeStamps {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RapportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RapportEntity.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RapportEntity.prototype, "objet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RapportEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.UserEntity, (user) => user.rapport),
    __metadata("design:type", Array)
], RapportEntity.prototype, "user", void 0);
RapportEntity = __decorate([
    (0, typeorm_1.Entity)('rapport')
], RapportEntity);
exports.RapportEntity = RapportEntity;
//# sourceMappingURL=Rapport.entity.js.map