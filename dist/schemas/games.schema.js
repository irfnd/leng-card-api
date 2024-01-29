"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDto = exports.GameSchema = void 0;
const lodash_1 = __importDefault(require("lodash"));
const z = __importStar(require("nestjs-zod/z"));
const error_messages_1 = require("./error.messages");
const validator_1 = __importDefault(require("validator"));
const { game } = error_messages_1.messages;
exports.GameSchema = z.object({
    id: z.string().trim().refine(validator_1.default.isMongoId, { message: game.id.valid }).describe("Game's ID"),
    name: z.string().trim().transform(lodash_1.default.upperFirst).describe("Game's name"),
    descriptions: z.string().trim().nullish().describe("Game's description"),
    totalPoint: z.number().describe("Game's total points"),
    userIds: z.array(z.string().trim().refine(validator_1.default.isMongoId, { message: game.id.valid })).describe("Game's user IDs"),
});
var GameDto;
(function (GameDto) {
    GameDto.Entity = exports.GameSchema;
    GameDto.Create = exports.GameSchema.omit({ id: true });
    GameDto.Query = exports.GameSchema.pick({ name: true }).partial();
    GameDto.Update = exports.GameSchema.pick({ name: true, descriptions: true, totalPoint: true }).partial();
    GameDto.Delete = exports.GameSchema.pick({ id: true });
})(GameDto || (exports.GameDto = GameDto = {}));
//# sourceMappingURL=games.schema.js.map