import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UseZodGuard } from 'nestjs-zod';
import { GameDto } from '../schemas';
import { TokenGuard } from '../token/token.guard';
import { Exclude } from '../utils/exclude.utils';
import { GamesService } from './games.service';

import type { GameTypes } from '../schemas';

@UseGuards(TokenGuard)
@Controller('games')
export class GamesController {
	constructor(private readonly gamesService: GamesService) {}

	// Get Games
	@UseZodGuard('query', GameDto.Query)
	@Get()
	async getGames(@Query() query: GameTypes.Query) {
		try {
			const games = await this.gamesService.getAll(query);
			return { message: 'Games successfully retrieved.', games };
		} catch (err) {
			throw err;
		}
	}

	// Get Single Game by ID
	@UseZodGuard('params', GameDto.Entity.pick({ id: true }))
	@Get(':id')
	async getGame(@Param('id') id: string) {
		try {
			const { rounds, users, ...others } = await this.gamesService.getById({ id });
			const reshapedGame = Exclude.object(others, ['userIds']);
			const reshapedUsers = Exclude.array(users, ['role', 'password', 'gameIds', 'bio']);
			const reshapedRounds = Exclude.array(
				rounds.map((round) => ({ ...round, user: Exclude.object(round.user, ['role', 'password', 'gameIds', 'bio']) })),
				['gameId', 'userId']
			);
			const results = { ...reshapedGame, users: reshapedUsers, rounds: reshapedRounds };
			return { message: 'Game successfully retrieved.', game: results };
		} catch (err) {
			throw err;
		}
	}

	// Create Game
	@UseZodGuard('body', GameDto.Create)
	@Post()
	async createGame(@Body() data: GameTypes.Create) {
		try {
			const game = await this.gamesService.create(data);
			return { message: 'Game successfully created.', game };
		} catch (err) {
			throw err;
		}
	}

	// Update Game
	@UseZodGuard('params', GameDto.Entity.pick({ id: true }))
	@UseZodGuard('body', GameDto.Update)
	@Patch(':id')
	async updateGame(@Param('id') id: string, @Body() data: GameTypes.Update) {
		try {
			const game = await this.gamesService.update(id, data);
			return { message: 'Game successfully updated.', game };
		} catch (err) {
			throw err;
		}
	}

	// Delete Game
	@UseZodGuard('params', GameDto.Entity.pick({ id: true }))
	@Delete(':id')
	async deleteGame(@Param('id') id: string) {
		try {
			const game = await this.gamesService.delete(id);
			return { message: 'Game successfully deleted.', game };
		} catch (err) {
			throw err;
		}
	}
}
