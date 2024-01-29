import * as z from 'nestjs-zod/z';
export declare const RoundSchema: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    gameId: z.ZodEffects<z.ZodString, string, string>;
    userId: z.ZodEffects<z.ZodString, string, string>;
    point: z.ZodNumber;
    isDead: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    isLeng: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    gameId: string;
    userId: string;
    point: number;
    isDead: boolean | null;
    isLeng: boolean | null;
}, {
    id: string;
    gameId: string;
    userId: string;
    point: number;
    isDead?: boolean | null | undefined;
    isLeng?: boolean | null | undefined;
}>;
type InferRound = z.infer<typeof RoundSchema>;
export declare namespace RoundDto {
    const Entity: z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        gameId: z.ZodEffects<z.ZodString, string, string>;
        userId: z.ZodEffects<z.ZodString, string, string>;
        point: z.ZodNumber;
        isDead: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        isLeng: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        gameId: string;
        userId: string;
        point: number;
        isDead: boolean | null;
        isLeng: boolean | null;
    }, {
        id: string;
        gameId: string;
        userId: string;
        point: number;
        isDead?: boolean | null | undefined;
        isLeng?: boolean | null | undefined;
    }>;
    const Create: z.ZodObject<Omit<{
        id: z.ZodEffects<z.ZodString, string, string>;
        gameId: z.ZodEffects<z.ZodString, string, string>;
        userId: z.ZodEffects<z.ZodString, string, string>;
        point: z.ZodNumber;
        isDead: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        isLeng: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    }, "id">, "strip", z.ZodTypeAny, {
        gameId: string;
        userId: string;
        point: number;
        isDead: boolean | null;
        isLeng: boolean | null;
    }, {
        gameId: string;
        userId: string;
        point: number;
        isDead?: boolean | null | undefined;
        isLeng?: boolean | null | undefined;
    }>;
    const Query: z.ZodObject<{
        gameId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        userId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        gameId?: string | undefined;
        userId?: string | undefined;
    }, {
        gameId?: string | undefined;
        userId?: string | undefined;
    }>;
    const Update: z.ZodObject<{
        point: z.ZodOptional<z.ZodNumber>;
        isDead: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>>;
        isLeng: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>>;
    }, "strip", z.ZodTypeAny, {
        point?: number | undefined;
        isDead?: boolean | null | undefined;
        isLeng?: boolean | null | undefined;
    }, {
        point?: number | undefined;
        isDead?: boolean | null | undefined;
        isLeng?: boolean | null | undefined;
    }>;
    const Delete: z.ZodObject<Pick<{
        id: z.ZodEffects<z.ZodString, string, string>;
        gameId: z.ZodEffects<z.ZodString, string, string>;
        userId: z.ZodEffects<z.ZodString, string, string>;
        point: z.ZodNumber;
        isDead: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        isLeng: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    }, "id">, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}
export declare namespace RoundTypes {
    type Create = Omit<InferRound, 'id'>;
    type Query = Partial<Pick<InferRound, 'gameId' | 'userId'>>;
    type QueryUnique = Pick<InferRound, 'id'>;
    type Update = Partial<Pick<InferRound, 'point' | 'isDead' | 'isLeng'>>;
    type Delete = Pick<InferRound, 'id'>;
}
export {};
