import { PrismaService } from '../prisma/prisma.service';
import type { RoundTypes } from '../schemas';
export declare class RoundsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(query: RoundTypes.Query): Promise<{
        id: string;
        gameId: string;
        userId: string;
        point: number;
        isDead: boolean | null;
        isLeng: boolean | null;
        createdAt: Date | null;
    }[]>;
    getById(query: RoundTypes.QueryUnique): Promise<{
        id: string;
        gameId: string;
        userId: string;
        point: number;
        isDead: boolean | null;
        isLeng: boolean | null;
        createdAt: Date | null;
    }>;
    create(data: RoundTypes.Create): Promise<{
        id: string;
        gameId: string;
        userId: string;
        point: number;
        isDead: boolean | null;
        isLeng: boolean | null;
        createdAt: Date | null;
    }>;
    update(id: string, data: RoundTypes.Update): Promise<{
        id: string;
        gameId: string;
        userId: string;
        point: number;
        isDead: boolean | null;
        isLeng: boolean | null;
        createdAt: Date | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        gameId: string;
        userId: string;
        point: number;
        isDead: boolean | null;
        isLeng: boolean | null;
        createdAt: Date | null;
    }>;
}
