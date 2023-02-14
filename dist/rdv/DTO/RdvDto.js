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
exports.RdvDto = void 0;
const class_validator_1 = require("class-validator");
class RdvDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ noms ne doit pas etre vide',
    }),
    __metadata("design:type", String)
], RdvDto.prototype, "noms", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ telephone ne doit pas etre vide',
    }),
    __metadata("design:type", String)
], RdvDto.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ email ne doit pas etre vide',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RdvDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ object ne doit pas etre vide',
    }),
    __metadata("design:type", String)
], RdvDto.prototype, "object", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ date ne doit pas etre vide',
    }),
    __metadata("design:type", String)
], RdvDto.prototype, "dateRdv", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le champ heure ne doit pas etre vide',
    }),
    __metadata("design:type", String)
], RdvDto.prototype, "heureRdv", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RdvDto.prototype, "commentaire", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RdvDto.prototype, "status", void 0);
exports.RdvDto = RdvDto;
//# sourceMappingURL=RdvDto.js.map