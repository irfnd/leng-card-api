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
exports.RoundsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const parse_utils_1 = require("../utils/parse.utils");
let RoundsService = class RoundsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(query) {
        const parsedQueries = parse_utils_1.ParseUtils.query(query, { equalFields: ['gameId', 'userId'] });
        return this.prisma.rounds.findMany({ where: parsedQueries });
    }
    async getById(query) {
        const parsedQueries = query;
        return await this.prisma.rounds.findUniqueOrThrow({ where: parsedQueries });
    }
    async create(data) {
        return await this.prisma.rounds.create({ data });
    }
    async update(id, data) {
        return await this.prisma.rounds.update({ where: { id }, data });
    }
    async delete(id) {
        return await this.prisma.rounds.delete({ where: { id } });
    }
};
exports.RoundsService = RoundsService;
exports.RoundsService = RoundsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoundsService);
//# sourceMappingURL=rounds.service.js.map