import { RoundsService } from 'src/rounds/rounds.service';
import type { RoundTypes } from 'src/schemas';
export declare class RoundsController {
    private readonly roundsService;
    constructor(roundsService: RoundsService);
    getAll(query: RoundTypes.Query): Promise<{
        message: string;
        rounds: {
            id: string;
            gameId: string;
            userId: string;
            point: number;
            isDead: boolean | null;
            isLeng: boolean | null;
            createdAt: Date | null;
        }[];
    }>;
    getById(id: string): Promise<{
        message: string;
        round: {
            id: string;
            gameId: string;
            userId: string;
            point: number;
            isDead: boolean | null;
            isLeng: boolean | null;
            createdAt: Date | null;
        };
    }>;
    create(data: RoundTypes.Create): Promise<{
        message: string;
        round: {
            id: string;
            gameId: string;
            userId: string;
            point: number;
            isDead: boolean | null;
            isLeng: boolean | null;
            createdAt: Date | null;
        };
    }>;
    update(id: string, data: RoundTypes.Update): Promise<{
        message: string;
        round: {
            id: string;
            gameId: string;
            userId: string;
            point: number;
            isDead: boolean | null;
            isLeng: boolean | null;
            createdAt: Date | null;
        };
    }>;
    delete(id: string): Promise<{
        message: string;
        round: {
            id: string;
            gameId: string;
            userId: string;
            point: number;
            isDead: boolean | null;
            isLeng: boolean | null;
            createdAt: Date | null;
        };
    }>;
}
