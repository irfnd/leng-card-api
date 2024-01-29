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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const schemas_1 = require("../schemas");
const token_guard_1 = require("../token/token.guard");
const users_service_1 = require("./users.service");
const exclude_utils_1 = require("../utils/exclude.utils");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUsers(query) {
        try {
            const retrievedUser = await this.usersService.getAll(query);
            const users = retrievedUser ? exclude_utils_1.Exclude.array(retrievedUser, ['password', 'role', 'gameIds']) : null;
            return { message: 'User successfully retrieved.', users };
        }
        catch (err) {
            throw err;
        }
    }
    async getUser(username) {
        try {
            const { user, ...others } = await this.usersService.getByUnique({ username });
            const reshapedUser = exclude_utils_1.Exclude.object(user, ['password', 'role', 'gameIds']);
            const results = { ...reshapedUser, ...others };
            return { message: 'User successfully retrieved.', user: results };
        }
        catch (err) {
            throw err;
        }
    }
    async createUser(data) {
        try {
            const createdUser = await this.usersService.create(data);
            const user = exclude_utils_1.Exclude.object(createdUser, ['password', 'role', 'gameIds']);
            return { message: 'User successfully created.', user };
        }
        catch (err) {
            throw err;
        }
    }
    async updateUser(id, data) {
        try {
            const updatedUser = await this.usersService.update(id, data);
            const user = exclude_utils_1.Exclude.object(updatedUser, ['password', 'role', 'gameIds']);
            return { message: 'User successfully updated.', user };
        }
        catch (err) {
            throw err;
        }
    }
    async deleteUser(id) {
        try {
            const deletedUser = await this.usersService.delete(id);
            const user = exclude_utils_1.Exclude.object(deletedUser, ['password', 'role', 'gameIds']);
            return { message: 'User successfully deleted.', user };
        }
        catch (err) {
            throw err;
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('query', schemas_1.UserDto.Query),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.UserDto.Entity.pick({ username: true })),
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('body', schemas_1.UserDto.Create),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.UserDto.Entity.pick({ id: true })),
    (0, nestjs_zod_1.UseZodGuard)('body', schemas_1.UserDto.Update),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.UserDto.Entity.pick({ id: true })),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.UseGuards)(token_guard_1.TokenGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map