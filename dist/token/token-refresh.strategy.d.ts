import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Strategy } from 'passport-jwt';
import type { Request } from 'express';
declare const TokenRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class TokenRefreshStrategy extends TokenRefreshStrategy_base {
    private jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    validate(req: Request, payload: Record<string, any>): Promise<{
        isNew: boolean;
        token: string | undefined;
    }>;
}
export {};
