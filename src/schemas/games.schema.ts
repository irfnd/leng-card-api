import _ from 'lodash';
import * as z from 'nestjs-zod/z';
import { messages } from 'src/schemas/error.messages';
import validator from 'validator';

const { game } = messages;

export const GameSchema = z.object({
	id: z.string().trim().refine(validator.isMongoId, { message: game.id.valid }).describe("Game's ID"),
	name: z.string().trim().transform(_.upperFirst).describe("Game's name"),
	descriptions: z.string().trim().nullish().describe("Game's description"),
	totalPoint: z.number().describe("Game's total points"),
	userIds: z.array(z.string().trim().refine(validator.isMongoId, { message: game.id.valid })).describe("Game's user IDs"),
});

type InferGame = z.infer<typeof GameSchema>;

export namespace GameDto {
	export const Entity = GameSchema;
	export const Create = GameSchema.omit({ id: true });
	export const Query = GameSchema.pick({ name: true }).partial();
	export const Update = GameSchema.pick({ name: true, descriptions: true, totalPoint: true }).partial();
	export const Delete = GameSchema.pick({ id: true });
}

export namespace GameTypes {
	export type Create = Omit<InferGame, 'id'>;
	export type Query = Partial<Pick<InferGame, 'name'>>;
	export type QueryUnique = Pick<InferGame, 'id'>;
	export type Delete = Pick<InferGame, 'id'>;
	export type Update = Partial<Pick<InferGame, 'name' | 'descriptions' | 'totalPoint'>>;
}
