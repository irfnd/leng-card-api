import * as z from 'nestjs-zod/z';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    username: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodString;
    name: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    role: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodEnum<["user", "admin"]>>>>;
    password: z.ZodEffects<z.ZodString, string, string>;
    bio: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gameIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    username: string;
    email: string;
    name: string;
    role: "user" | "admin" | null;
    password: string;
    gameIds: string[];
    bio?: string | null | undefined;
}, {
    id: string;
    username: string;
    email: string;
    name: string;
    password: string;
    gameIds: string[];
    role?: "user" | "admin" | null | undefined;
    bio?: string | null | undefined;
}>;
type InferUser = z.infer<typeof UserSchema>;
export declare namespace UserDto {
    const Entity: z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        username: z.ZodEffects<z.ZodString, string, string>;
        email: z.ZodString;
        name: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        role: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodEnum<["user", "admin"]>>>>;
        password: z.ZodEffects<z.ZodString, string, string>;
        bio: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        gameIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        username: string;
        email: string;
        name: string;
        role: "user" | "admin" | null;
        password: string;
        gameIds: string[];
        bio?: string | null | undefined;
    }, {
        id: string;
        username: string;
        email: string;
        name: string;
        password: string;
        gameIds: string[];
        role?: "user" | "admin" | null | undefined;
        bio?: string | null | undefined;
    }>;
    const Create: z.ZodObject<Omit<{
        id: z.ZodEffects<z.ZodString, string, string>;
        username: z.ZodEffects<z.ZodString, string, string>;
        email: z.ZodString;
        name: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        role: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodEnum<["user", "admin"]>>>>;
        password: z.ZodEffects<z.ZodString, string, string>;
        bio: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        gameIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "id" | "role" | "bio" | "gameIds" | "roundIds">, "strip", z.ZodTypeAny, {
        username: string;
        email: string;
        name: string;
        password: string;
    }, {
        username: string;
        email: string;
        name: string;
        password: string;
    }>;
    const Query: z.ZodObject<{
        email: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        email?: string | undefined;
        username?: string | undefined;
        name?: string | undefined;
    }, {
        email?: string | undefined;
        username?: string | undefined;
        name?: string | undefined;
    }>;
    const Update: z.ZodObject<{
        name: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
        password: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        bio: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        password?: string | undefined;
        bio?: string | null | undefined;
    }, {
        name?: string | undefined;
        password?: string | undefined;
        bio?: string | null | undefined;
    }>;
    const Delete: z.ZodObject<Pick<{
        id: z.ZodEffects<z.ZodString, string, string>;
        username: z.ZodEffects<z.ZodString, string, string>;
        email: z.ZodString;
        name: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        role: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodEnum<["user", "admin"]>>>>;
        password: z.ZodEffects<z.ZodString, string, string>;
        bio: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        gameIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "id">, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    const Validate: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
}
export declare namespace UserTypes {
    type Create = Omit<InferUser, 'id' | 'role' | 'bio' | 'gameIds' | 'roundIds'>;
    type Query = Partial<Pick<InferUser, 'email' | 'username' | 'name'>>;
    type QueryUnique = Pick<InferUser, 'id' | 'email' | 'username'>;
    type Delete = Pick<InferUser, 'id'>;
    type Update = Partial<Pick<InferUser, 'name' | 'password' | 'bio'>>;
    type Context = Pick<InferUser, 'id' | 'email' | 'username' | 'name'>;
    type Validate = Pick<InferUser, 'email' | 'password'>;
}
export {};
