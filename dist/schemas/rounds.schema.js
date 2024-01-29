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
exports.RoundDto = exports.RoundSchema = void 0;
const z = __importStar(require("nestjs-zod/z"));
const error_messages_1 = require("./error.messages");
const validator_1 = __importDefault(require("validator"));
const { round } = error_messages_1.messages;
exports.RoundSchema = z.object({
    id: z.string().trim().refine(validator_1.default.isMongoId, { message: round.id.valid }).describe("Round's ID"),
    gameId: z.string().trim().refine(validator_1.default.isMongoId, { message: round.id.valid }).describe("Game's ID"),
    userId: z.string().trim().refine(validator_1.default.isMongoId, { message: round.id.valid }).describe("User's ID"),
    point: z.number().describe("User Round's points"),
    isDead: z.boolean().nullish().default(false).describe("User Round's dead status"),
    isLeng: z.boolean().nullish().default(false).describe("User Round's leng status"),
});
var RoundDto;
(function (RoundDto) {
    RoundDto.Entity = exports.RoundSchema;
    RoundDto.Create = exports.RoundSchema.omit({ id: true });
    RoundDto.Query = exports.RoundSchema.pick({ gameId: true, userId: true }).partial();
    RoundDto.Update = exports.RoundSchema.pick({ point: true, isDead: true, isLeng: true }).partial();
    RoundDto.Delete = exports.RoundSchema.pick({ id: true });
})(RoundDto || (exports.RoundDto = RoundDto = {}));
//# sourceMappingURL=rounds.schema.js.map