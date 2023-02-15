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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const UserDto_1 = require("./DTO/UserDto");
const ModifUser_1 = require("./DTO/ModifUser");
const user_service_1 = require("./user.service");
const LoginDto_1 = require("./LoginDto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async nouveau(user) {
        return await this.userService.nouveauRdv(user);
    }
    async getOneDon(id) {
        return await this.userService.getOneDon(id);
    }
    async getAllDon() {
        return await this.userService.getAll();
    }
    async deleteOne(id) {
        return await this.userService.deleteOne(id);
    }
    async deleteDefinitive(id) {
        return await this.userService.bloquer(id);
    }
    async restore(id) {
        return await this.userService.restore(id);
    }
    async updateCv(modifier, id) {
        return await this.userService.modificationRdv(id, modifier);
    }
    async login(credentials) {
        return this.userService.login(credentials);
    }
};
__decorate([
    (0, common_1.Post)('nouveau/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "nouveau", null);
__decorate([
    (0, common_1.Get)('oneUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOneDon", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllDon", null);
__decorate([
    (0, common_1.Delete)('deleteOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Delete)('bloquer/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteDefinitive", null);
__decorate([
    (0, common_1.Get)('debloquer/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "restore", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ModifUser_1.ModifUser, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateCv", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map