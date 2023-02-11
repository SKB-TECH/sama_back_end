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
exports.donEntity = void 0;
const timestamp_entity_1 = require("../../Times/timestamp.entity");
const typeorm_1 = require("typeorm");
const donateur_type_1 = require("../don_enum/donateur_type");
let donEntity = class donEntity extends timestamp_entity_1.TimeStamps {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], donEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], donEntity.prototype, "donateur", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: donateur_type_1.type_donateur,
        default: donateur_type_1.type_donateur.INDIVIDUEL,
    }),
    __metadata("design:type", String)
], donEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: donateur_type_1.categirie_don,
        default: donateur_type_1.categirie_don.ESPECE,
    }),
    __metadata("design:type", String)
], donEntity.prototype, "categorie", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], donEntity.prototype, "designation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], donEntity.prototype, "montant", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 55 }),
    __metadata("design:type", String)
], donEntity.prototype, "devise", void 0);
donEntity = __decorate([
    (0, typeorm_1.Entity)('don')
], donEntity);
exports.donEntity = donEntity;
//# sourceMappingURL=don.entity.js.map