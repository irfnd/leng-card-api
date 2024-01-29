import { GamesService } from './games.service';
import type { GameTypes } from '../schemas';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    getGames(query: GameTypes.Query): Promise<{
        message: string;
        games: {
            id: string;
            name: string;
            descriptions: string | null;
            totalPoint: number;
            userIds: string[];
            createdAt: Date | null;
        }[];
    }>;
    getGame(id: string): Promise<{
        message: string;
        game: {
            users: Omit<{
                id: string;
                username: string;
                email: string;
                name: string;
                role: import("@prisma/client").$Enums.Roles | null;
                password: string;
                bio: string | null;
                gameIds: string[];
            }, "role" | "password" | "bio" | "gameIds">[];
            rounds: Omit<{
                user: Omit<{
                    id: string;
                    username: string;
                    email: string;
                    name: string;
                    role: import("@prisma/client").$Enums.Roles | null;
                    password: string;
                    bio: string | null;
                    gameIds: string[];
                }, "role" | "password" | "bio" | "gameIds">;
                id: string;
                gameId: string;
                userId: string;
                point: number;
                isDead: boolean | null;
                isLeng: boolean | null;
                createdAt: Date | null;
            }, "gameId" | "userId">[];
            id: string;
            name: string;
            descriptions: string | null;
            totalPoint: number;
            createdAt: Date | null;
        };
    }>;
    createGame(data: GameTypes.Create): Promise<{
        message: string;
        game: {
            id: string;
            name: string;
            descriptions: string | null;
            totalPoint: number;
            userIds: string[];
            createdAt: Date | null;
        };
    }>;
    updateGame(id: string, data: GameTypes.Update): Promise<{
        message: string;
        game: {
            id: string;
            name: string;
            descriptions: string | null;
            totalPoint: number;
            userIds: string[];
            createdAt: Date | null;
        };
    }>;
    deleteGame(id: string): Promise<{
        message: string;
        game: {
            id: string;
            name: string;
            descriptions: string | null;
            totalPoint: number;
            userIds: string[];
            createdAt: Date | null;
        };
    }>;
}
