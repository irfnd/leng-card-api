import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ParseUtils } from '../utils/parse.utils';

import type { GameTypes } from '../schemas';

@Injectable()
export class GamesService {
	constructor(private prisma: PrismaService) {}

	// Get All Games
	async getAll(query: GameTypes.Query) {
		const parsedQueries = ParseUtils.query(query) as GameTypes.Query;
		return await this.prisma.games.findMany({ where: parsedQueries });
	}

	// Get Single Game by ID
	async getById(query: GameTypes.QueryUnique) {
		const parsedQueries = query as GameTypes.QueryUnique;
		return await this.prisma.games.findUniqueOrThrow({
			where: parsedQueries,
			include: {
				rounds: {
					orderBy: { point: 'asc' },
					include: { user: true },
				},
				users: true,
			},
		});
	}

	// Create Game
	async create(data: GameTypes.Create) {
		return await this.prisma.games.create({ data });
	}

	// Update Game
	async update(id: string, data: GameTypes.Update) {
		return await this.prisma.games.update({ where: { id }, data });
	}

	// Delete Game
	async delete(id: string) {
		return await this.prisma.games.delete({ where: { id } });
	}
}
