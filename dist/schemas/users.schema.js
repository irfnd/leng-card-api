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
exports.UserDto = exports.UserSchema = void 0;
const lodash_1 = __importDefault(require("lodash"));
const z = __importStar(require("nestjs-zod/z"));
const validator_1 = __importDefault(require("validator"));
const error_messages_1 = require("./error.messages");
const { user } = error_messages_1.messages;
exports.UserSchema = z.object({
    id: z.string().trim().refine(validator_1.default.isMongoId, { message: user.id.valid }).describe("User's ID"),
    username: z
        .string()
        .trim()
        .min(8, { message: user.username.min })
        .max(20, { message: user.username.max })
        .refine((value) => validator_1.default.isAlphanumeric(value, undefined, { ignore: '._' }), { message: user.username.valid })
        .describe("User's username"),
    email: z.string().trim().email({ message: user.email.valid }).describe("User's email address"),
    name: z
        .string()
        .trim()
        .min(3, { message: user.name.min })
        .max(30, { message: user.name.max })
        .transform(lodash_1.default.upperFirst)
        .refine((value) => validator_1.default.isAlpha(value, undefined, { ignore: ' ' }), { message: user.name.valid })
        .describe("User's fullname"),
    role: z.enum(['user', 'admin']).nullish().default('user').describe("Uers's role"),
    password: z
        .string()
        .trim()
        .refine(validator_1.default.isStrongPassword, { message: user.password.valid })
        .describe("User's password"),
    bio: z.string().nullish().describe("User's bio"),
    gameIds: z.array(z.string().trim().refine(validator_1.default.isMongoId, { message: user.id.valid })).describe("User's game IDs"),
});
var UserDto;
(function (UserDto) {
    UserDto.Entity = exports.UserSchema;
    UserDto.Create = exports.UserSchema.omit({ id: true, role: true, bio: true, gameIds: true, roundIds: true });
    UserDto.Query = exports.UserSchema.pick({ email: true, username: true, name: true })
        .extend({ email: z.string(), username: z.string(), name: z.string() })
        .partial();
    UserDto.Update = exports.UserSchema.pick({ name: true, password: true, bio: true }).partial();
    UserDto.Delete = exports.UserSchema.pick({ id: true });
    UserDto.Validate = exports.UserSchema.pick({ email: true, password: true }).extend({ password: z.string() });
})(UserDto || (exports.UserDto = UserDto = {}));
//# sourceMappingURL=users.schema.js.map