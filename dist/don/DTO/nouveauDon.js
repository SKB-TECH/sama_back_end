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
exports.NouveauDon = void 0;
const class_validator_1 = require("class-validator");
class NouveauDon {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ donateur ne doit pas etre vide',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NouveauDon.prototype, "donateur", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ adresse ne doit pas etre vide',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NouveauDon.prototype, "adresse", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ type ne doit pas etre vide',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ telephone ne doit pas etre vide',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NouveauDon.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NouveauDon.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ categorie ne doit pas etre vide',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NouveauDon.prototype, "categorie", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ designation ne doit pas etre vide',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NouveauDon.prototype, "designation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ montant ne doit pas etre vide',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], NouveauDon.prototype, "montant", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ devise ne doit pas etre vide',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NouveauDon.prototype, "devise", void 0);
exports.NouveauDon = NouveauDon;
//# sourceMappingURL=nouveauDon.js.map