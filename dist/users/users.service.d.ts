import { PrismaService } from '../prisma/prisma.service';
import type { UserTypes } from '../schemas';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    private hashPassword;
    getAll(query: UserTypes.Query): Promise<{
        id: string;
        username: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Roles | null;
        password: string;
        bio: string | null;
        gameIds: string[];
    }[]>;
    getByUnique<K extends keyof UserTypes.QueryUnique>(query: Pick<UserTypes.QueryUnique, K>): Promise<{
        user: {
            id: string;
            username: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Roles | null;
            password: string;
            bio: string | null;
            gameIds: string[];
        };
        totalGame: number;
        totalDead: number;
        totalLeng: number;
    }>;
    getAdmin<K extends keyof UserTypes.QueryUnique>(query: Pick<UserTypes.QueryUnique, K>): Promise<{
        id: string;
        username: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Roles | null;
        password: string;
        bio: string | null;
        gameIds: string[];
    }>;
    create(data: UserTypes.Create): Promise<{
        id: string;
        username: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Roles | null;
        password: string;
        bio: string | null;
        gameIds: string[];
    }>;
    update(id: string, data: UserTypes.Update): Promise<{
        id: string;
        username: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Roles | null;
        password: string;
        bio: string | null;
        gameIds: string[];
    }>;
    delete(id: string): Promise<{
        id: string;
        username: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Roles | null;
        password: string;
        bio: string | null;
        gameIds: string[];
    }>;
}
