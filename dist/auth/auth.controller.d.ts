import { AuthService } from 'src/auth/auth.service';
import type { UserTypes } from 'src/schemas';
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
