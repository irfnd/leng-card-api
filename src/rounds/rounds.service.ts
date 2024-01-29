import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ParseUtils } from 'src/utils/parse.utils';

import type { RoundTypes } from 'src/schemas';

@Injectable()
export class RoundsService {
	constructor(private prisma: PrismaService) {}

	// Get All Rounds
	async getAll(query: RoundTypes.Query) {
		const parsedQueries: RoundTypes.Query = ParseUtils.query(query, { equalFields: ['gameId', 'userId'] });
		return this.prisma.rounds.findMany({ where: parsedQueries });
	}

	// Get Single Round by ID
	async getById(query: RoundTypes.QueryUnique) {
		const parsedQueries = query as RoundTypes.QueryUnique;
		return await this.prisma.rounds.findUniqueOrThrow({ where: parsedQueries });
	}

	// Create Round
	async create(data: RoundTypes.Create) {
		return await this.prisma.rounds.create({ data });
	}

	// Update Round
	async update(id: string, data: RoundTypes.Update) {
		return await this.prisma.rounds.update({ where: { id }, data });
	}

	// Delete Round
	async delete(id: string) {
		return await this.prisma.rounds.delete({ where: { id } });
	}
}
