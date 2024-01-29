import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { ParseUtils } from '../utils/parse.utils';

import type { UserTypes } from '../schemas';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	// Hashing Password
	private async hashPassword(password: string) {
		return await argon2.hash(password, { hashLength: 64 });
	}

	// Get All Users
	async getAll(query: UserTypes.Query) {
		const parsedQueries = ParseUtils.query(query) as UserTypes.Query;
		return this.prisma.users.findMany({ where: { ...parsedQueries, NOT: { role: 'admin' } } });
	}

	// Get Single User by Unique Key
	async getByUnique<K extends keyof UserTypes.QueryUnique>(query: Pick<UserTypes.QueryUnique, K>) {
		const parsedQueries = query as UserTypes.QueryUnique;
		return this.prisma.$transaction(async (tx) => {
			const user = await tx.users.findUniqueOrThrow({ where: { ...parsedQueries, NOT: { role: 'admin' } } });
			const totalGame = await tx.games.count({ where: { userIds: { has: user.id } } });
			const totalDead = await tx.rounds.count({ where: { userId: user.id, AND: { isDead: true } } });
			const totalLeng = await tx.rounds.count({ where: { userId: user.id, AND: { isLeng: true } } });
			return { user, totalGame, totalDead, totalLeng };
		});
	}

	// Get User Admin
	async getAdmin<K extends keyof UserTypes.QueryUnique>(query: Pick<UserTypes.QueryUnique, K>) {
		const parsedQueries = query as UserTypes.QueryUnique;
		return this.prisma.users.findUniqueOrThrow({ where: { ...parsedQueries, AND: { role: 'admin' } } });
	}

	// Create User
	async create(data: UserTypes.Create) {
		const hashedPassword = await this.hashPassword(data.password);
		return this.prisma.users.create({ data: { ...data, password: hashedPassword } });
	}

	// Update User
	async update(id: string, data: UserTypes.Update) {
		const hashedPassword = data.password ? await this.hashPassword(data.password) : data.password;
		return this.prisma.users.update({ where: { id }, data: { ...data, password: hashedPassword } });
	}

	// Delete User
	async delete(id: string) {
		return this.prisma.users.delete({ where: { id } });
	}
}
