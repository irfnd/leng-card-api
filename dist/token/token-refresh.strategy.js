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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRefreshStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const lodash_1 = __importDefault(require("lodash"));
const passport_jwt_1 = require("passport-jwt");
let TokenRefreshStrategy = class TokenRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor(configService, jwtService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET'),
            ignoreExpiration: true,
            passReqToCallback: true,
        });
        this.jwtService = jwtService;
    }
    async validate(req, payload) {
        const user = lodash_1.default.omit(payload, ['exp', 'iat']);
        const oldToken = req.headers.authorization?.split(' ')[1];
        const checkToken = Date.now() >= payload.exp * 1000;
        if (checkToken)
            return { isNew: true, token: await this.jwtService.signAsync(user) };
        return { isNew: false, token: oldToken };
    }
};
exports.TokenRefreshStrategy = TokenRefreshStrategy;
exports.TokenRefreshStrategy = TokenRefreshStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService])
], TokenRefreshStrategy);
//# sourceMappingURL=token-refresh.strategy.js.map