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
exports.MeddecinEntity = void 0;
const typeorm_1 = require("typeorm");
const meddecin_enum_1 = require("../meddecin_enum/meddecin_enum");
const timestamp_entity_1 = require("../../Times/timestamp.entity");
const Rapport_entity_1 = require("../../raport/entities/Rapport.entity");
let MeddecinEntity = class MeddecinEntity extends timestamp_entity_1.TimeStamps {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MeddecinEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], MeddecinEntity.prototype, "noms", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 25,
    }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: meddecin_enum_1.Meddecin_enum,
        default: meddecin_enum_1.Meddecin_enum.Homme,
    }),
    __metadata("design:type", String)
], MeddecinEntity.prototype, "telepone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MeddecinEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MeddecinEntity.prototype, "specialite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MeddecinEntity.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Rapport_entity_1.RapportEntity, (rapport) => rapport.meddecin),
    __metadata("design:type", Array)
], MeddecinEntity.prototype, "rapport", void 0);
MeddecinEntity = __decorate([
    (0, typeorm_1.Entity)('meddecin')
], MeddecinEntity);
exports.MeddecinEntity = MeddecinEntity;
//# sourceMappingURL=meddecin.entity.js.map