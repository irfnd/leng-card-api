import * as z from 'nestjs-zod/z';
export declare const GameSchema: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    name: z.ZodEffects<z.ZodString, string, string>;
    descriptions: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    totalPoint: z.ZodNumber;
    userIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    totalPoint: number;
    userIds: string[];
    descriptions?: string | null | undefined;
}, {
    id: string;
    name: string;
    totalPoint: number;
    userIds: string[];
    descriptions?: string | null | undefined;
}>;
type InferGame = z.infer<typeof GameSchema>;
export declare namespace GameDto {
    const Entity: z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        name: z.ZodEffects<z.ZodString, string, string>;
        descriptions: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        totalPoint: z.ZodNumber;
        userIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        totalPoint: number;
        userIds: string[];
        descriptions?: string | null | undefined;
    }, {
        id: string;
        name: string;
        totalPoint: number;
        userIds: string[];
        descriptions?: string | null | undefined;
    }>;
    const Create: z.ZodObject<Omit<{
        id: z.ZodEffects<z.ZodString, string, string>;
        name: z.ZodEffects<z.ZodString, string, string>;
        descriptions: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        totalPoint: z.ZodNumber;
        userIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "id">, "strip", z.ZodTypeAny, {
        name: string;
        totalPoint: number;
        userIds: string[];
        descriptions?: string | null | undefined;
    }, {
        name: string;
        totalPoint: number;
        userIds: string[];
        descriptions?: string | null | undefined;
    }>;
    const Query: z.ZodObject<{
        name: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
    }, {
        name?: string | undefined;
    }>;
    const Update: z.ZodObject<{
        name: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        descriptions: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        totalPoint: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        descriptions?: string | null | undefined;
        totalPoint?: number | undefined;
    }, {
        name?: string | undefined;
        descriptions?: string | null | undefined;
        totalPoint?: number | undefined;
    }>;
    const Delete: z.ZodObject<Pick<{
        id: z.ZodEffects<z.ZodString, string, string>;
        name: z.ZodEffects<z.ZodString, string, string>;
        descriptions: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        totalPoint: z.ZodNumber;
        userIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "id">, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}
export declare namespace GameTypes {
    type Create = Omit<InferGame, 'id'>;
    type Query = Partial<Pick<InferGame, 'name'>>;
    type QueryUnique = Pick<InferGame, 'id'>;
    type Delete = Pick<InferGame, 'id'>;
    type Update = Partial<Pick<InferGame, 'name' | 'descriptions' | 'totalPoint'>>;
}
export {};
