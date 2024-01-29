import * as z from 'nestjs-zod/z';
import { messages } from 'src/schemas/error.messages';
import validator from 'validator';

const { round } = messages;

export const RoundSchema = z.object({
	id: z.string().trim().refine(validator.isMongoId, { message: round.id.valid }).describe("Round's ID"),
	gameId: z.string().trim().refine(validator.isMongoId, { message: round.id.valid }).describe("Game's ID"),
	userId: z.string().trim().refine(validator.isMongoId, { message: round.id.valid }).describe("User's ID"),
	point: z.number().describe("User Round's points"),
	isDead: z.boolean().nullish().default(false).describe("User Round's dead status"),
	isLeng: z.boolean().nullish().default(false).describe("User Round's leng status"),
});

type InferRound = z.infer<typeof RoundSchema>;

export namespace RoundDto {
	export const Entity = RoundSchema;
	export const Create = RoundSchema.omit({ id: true });
	export const Query = RoundSchema.pick({ gameId: true, userId: true }).partial();
	export const Update = RoundSchema.pick({ point: true, isDead: true, isLeng: true }).partial();
	export const Delete = RoundSchema.pick({ id: true });
}

export namespace RoundTypes {
	export type Create = Omit<InferRound, 'id'>;
	export type Query = Partial<Pick<InferRound, 'gameId' | 'userId'>>;
	export type QueryUnique = Pick<InferRound, 'id'>;
	export type Update = Partial<Pick<InferRound, 'point' | 'isDead' | 'isLeng'>>;
	export type Delete = Pick<InferRound, 'id'>;
}
