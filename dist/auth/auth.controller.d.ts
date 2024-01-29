import { AuthService } from './auth.service';
import type { UserTypes } from '../schemas';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: UserTypes.Validate): Promise<{
        message: string;
        tokens: {
            accessToken: string;
        };
    }>;
    refreshToken(tokenCtx: {
        isNew: boolean;
        token: string;
    }): Promise<{
        message: string;
        token: string;
    }>;
}
