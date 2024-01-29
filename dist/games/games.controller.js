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
exports.GamesController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const schemas_1 = require("../schemas");
const token_guard_1 = require("../token/token.guard");
const exclude_utils_1 = require("../utils/exclude.utils");
const games_service_1 = require("./games.service");
let GamesController = class GamesController {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    async getGames(query) {
        try {
            const games = await this.gamesService.getAll(query);
            return { message: 'Games successfully retrieved.', games };
        }
        catch (err) {
            throw err;
        }
    }
    async getGame(id) {
        try {
            const { rounds, users, ...others } = await this.gamesService.getById({ id });
            const reshapedGame = exclude_utils_1.Exclude.object(others, ['userIds']);
            const reshapedUsers = exclude_utils_1.Exclude.array(users, ['role', 'password', 'gameIds', 'bio']);
            const reshapedRounds = exclude_utils_1.Exclude.array(rounds.map((round) => ({ ...round, user: exclude_utils_1.Exclude.object(round.user, ['role', 'password', 'gameIds', 'bio']) })), ['gameId', 'userId']);
            const results = { ...reshapedGame, users: reshapedUsers, rounds: reshapedRounds };
            return { message: 'Game successfully retrieved.', game: results };
        }
        catch (err) {
            throw err;
        }
    }
    async createGame(data) {
        try {
            const game = await this.gamesService.create(data);
            return { message: 'Game successfully created.', game };
        }
        catch (err) {
            throw err;
        }
    }
    async updateGame(id, data) {
        try {
            const game = await this.gamesService.update(id, data);
            return { message: 'Game successfully updated.', game };
        }
        catch (err) {
            throw err;
        }
    }
    async deleteGame(id) {
        try {
            const game = await this.gamesService.delete(id);
            return { message: 'Game successfully deleted.', game };
        }
        catch (err) {
            throw err;
        }
    }
};
exports.GamesController = GamesController;
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('query', schemas_1.GameDto.Query),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "getGames", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.GameDto.Entity.pick({ id: true })),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "getGame", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('body', schemas_1.GameDto.Create),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "createGame", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.GameDto.Entity.pick({ id: true })),
    (0, nestjs_zod_1.UseZodGuard)('body', schemas_1.GameDto.Update),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "updateGame", null);
__decorate([
    (0, nestjs_zod_1.UseZodGuard)('params', schemas_1.GameDto.Entity.pick({ id: true })),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "deleteGame", null);
exports.GamesController = GamesController = __decorate([
    (0, common_1.UseGuards)(token_guard_1.TokenGuard),
    (0, common_1.Controller)('games'),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesController);
//# sourceMappingURL=games.controller.js.map