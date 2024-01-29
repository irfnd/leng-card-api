import { UsersService } from './users.service';
import type { UserTypes } from '../schemas';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(query: UserTypes.Query): Promise<{
        message: string;
        users: Omit<{
            id: string;
            username: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Roles | null;
            password: string;
            bio: string | null;
            gameIds: string[];
        }, "role" | "password" | "gameIds">[] | null;
    }>;
    getUser(username: string): Promise<{
        message: string;
        user: {
            totalGame: number;
            totalDead: number;
            totalLeng: number;
            id: string;
            username: string;
            email: string;
            name: string;
            bio: string | null;
        };
    }>;
    createUser(data: UserTypes.Create): Promise<{
        message: string;
        user: Omit<{
            id: string;
            username: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Roles | null;
            password: string;
            bio: string | null;
            gameIds: string[];
        }, "role" | "password" | "gameIds">;
    }>;
    updateUser(id: string, data: UserTypes.Update): Promise<{
        message: string;
        user: Omit<{
            id: string;
            username: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Roles | null;
            password: string;
            bio: string | null;
            gameIds: string[];
        }, "role" | "password" | "gameIds">;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
        user: Omit<{
            id: string;
            username: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Roles | null;
            password: string;
            bio: string | null;
            gameIds: string[];
        }, "role" | "password" | "gameIds">;
    }>;
}
