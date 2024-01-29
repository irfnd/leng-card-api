import _ from 'lodash';
import * as z from 'nestjs-zod/z';
import validator from 'validator';
import { messages } from './error.messages';

const { user } = messages;

export const UserSchema = z.object({
	id: z.string().trim().refine(validator.isMongoId, { message: user.id.valid }).describe("User's ID"),
	username: z
		.string()
		.trim()
		.min(8, { message: user.username.min })
		.max(20, { message: user.username.max })
		.refine((value) => validator.isAlphanumeric(value, undefined, { ignore: '._' }), { message: user.username.valid })
		.describe("User's username"),
	email: z.string().trim().email({ message: user.email.valid }).describe("User's email address"),
	name: z
		.string()
		.trim()
		.min(3, { message: user.name.min })
		.max(30, { message: user.name.max })
		.transform(_.upperFirst)
		.refine((value) => validator.isAlpha(value, undefined, { ignore: ' ' }), { message: user.name.valid })
		.describe("User's fullname"),
	role: z.enum(['user', 'admin']).nullish().default('user').describe("Uers's role"),
	password: z
		.string()
		.trim()
		.refine(validator.isStrongPassword, { message: user.password.valid })
		.describe("User's password"),
	bio: z.string().nullish().describe("User's bio"),
	gameIds: z.array(z.string().trim().refine(validator.isMongoId, { message: user.id.valid })).describe("User's game IDs"),
});

type InferUser = z.infer<typeof UserSchema>;

export namespace UserDto {
	export const Entity = UserSchema;
	export const Create = UserSchema.omit({ id: true, role: true, bio: true, gameIds: true, roundIds: true });
	export const Query = UserSchema.pick({ email: true, username: true, name: true })
		.extend({ email: z.string(), username: z.string(), name: z.string() })
		.partial();
	export const Update = UserSchema.pick({ name: true, password: true, bio: true }).partial();
	export const Delete = UserSchema.pick({ id: true });
	export const Validate = UserSchema.pick({ email: true, password: true }).extend({ password: z.string() });
}

export namespace UserTypes {
	export type Create = Omit<InferUser, 'id' | 'role' | 'bio' | 'gameIds' | 'roundIds'>;
	export type Query = Partial<Pick<InferUser, 'email' | 'username' | 'name'>>;
	export type QueryUnique = Pick<InferUser, 'id' | 'email' | 'username'>;
	export type Delete = Pick<InferUser, 'id'>;
	export type Update = Partial<Pick<InferUser, 'name' | 'password' | 'bio'>>;
	export type Context = Pick<InferUser, 'id' | 'email' | 'username' | 'name'>;
	export type Validate = Pick<InferUser, 'email' | 'password'>;
}
