import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import type { UserTypes } from 'src/schemas';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private verifyPassword;
    login(data: UserTypes.Validate): Promise<{
        accessToken: string;
    }>;
}
