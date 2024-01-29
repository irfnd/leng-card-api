import { PrismaService } from 'src/prisma/prisma.service';
import type { GameTypes } from 'src/schemas';
export declare class GamesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(query: GameTypes.Query): Promise<{
        id: string;
        name: string;
        descriptions: string | null;
        totalPoint: number;
        userIds: string[];
        createdAt: Date | null;
    }[]>;
    getById(query: GameTypes.QueryUnique): Promise<{
        users: {
            id: string;
            username: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Roles | null;
            password: string;
            bio: string | null;
            gameIds: string[];
        }[];
        rounds: ({
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
        } & {
            id: string;
            gameId: string;
            userId: string;
            point: number;
            isDead: boolean | null;
            isLeng: boolean | null;
            createdAt: Date | null;
        })[];
    } & {
        id: string;
        name: string;
        descriptions: string | null;
        totalPoint: number;
        userIds: string[];
        createdAt: Date | null;
    }>;
    create(data: GameTypes.Create): Promise<{
        id: string;
        name: string;
        descriptions: string | null;
        totalPoint: number;
        userIds: string[];
        createdAt: Date | null;
    }>;
    update(id: string, data: GameTypes.Update): Promise<{
        id: string;
        name: string;
        descriptions: string | null;
        totalPoint: number;
        userIds: string[];
        createdAt: Date | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        descriptions: string | null;
        totalPoint: number;
        userIds: string[];
        createdAt: Date | null;
    }>;
}
