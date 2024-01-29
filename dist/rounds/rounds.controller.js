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
exports.RoundsController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const rounds_service_1 = require("./rounds.service");
const schemas_1 = require("../schemas");
const token_guard_1 = require("../token/token.guard");
let RoundsController = class RoundsController {
    constructor(roundsService) {
        this.roundsService = roundsService;
    }
    async getAll(query) {
        try {
            const rounds = await this.roundsService.getAll(query);
            return { message: 'Rounds successfully retrieved.', rounds };
        }
        catch (err) {
            throw err;
        }
    }
    async getById(id) {
        try {
            const round = await this.roundsService.getById({ id });
            return { message: 'Round successfully retrieved.', round };
        }
        catch (err) {
            throw err;
        }
    }
    async create(data) {
        try {
            const round = await this.roundsService.create(data);
            return { message: 'Round successfully created.', round };
        }
        catch (err) {
            throw err;
        }
    }
    async update(id, data) {
        try {
            const round = await this.roundsService.update(id, data);
            return { message: 'Round successfully updated.', round };
        }
        catch (err) {
            throw err;
        }
    }
    async delete(id) {
        try {
            const round = await this.roundsService.delete(id);
            return { message: 'Round successfully deleted.', round };
        }
        catch (err) {
            throw err;
        }
    }
};
exports.RoundsController = RoundsController;
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('query', schemas_1.RoundDto.Query),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoundsController.prototype, "getAll", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.RoundDto.Entity.pick({ id: true })),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoundsController.prototype, "getById", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('body', schemas_1.RoundDto.Create),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoundsController.prototype, "create", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.RoundDto.Entity.pick({ id: true })),
    (0, nestjs_zod_1.UseZodGuard)('body', schemas_1.RoundDto.Update),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RoundsController.prototype, "update", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.RoundDto.Entity.pick({ id: true })),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoundsController.prototype, "delete", null);
exports.RoundsController = RoundsController = __decorate([
    (0, common_1.UseGuards)(token_guard_1.TokenGuard),
    (0, common_1.Controller)('rounds'),
    __metadata("design:paramtypes", [rounds_service_1.RoundsService])
], RoundsController);
//# sourceMappingURL=rounds.controller.js.map