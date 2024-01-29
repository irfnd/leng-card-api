import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const TokenStrategy_base: new (...args: any[]) => Strategy;
export declare class TokenStrategy extends TokenStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: Record<string, any>): Promise<{
        id: any;
    }>;
}
export {};
