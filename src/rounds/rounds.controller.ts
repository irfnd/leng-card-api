import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UseZodGuard } from 'nestjs-zod';
import { RoundDto } from '../schemas';
import { TokenGuard } from '../token/token.guard';
import { RoundsService } from './rounds.service';

import type { RoundTypes } from '../schemas';

@UseGuards(TokenGuard)
@Controller('rounds')
export class RoundsController {
	constructor(private readonly roundsService: RoundsService) {}

	// Get All Rounds
	@UseZodGuard('query', RoundDto.Query)
	@Get()
	async getAll(@Query() query: RoundTypes.Query) {
		try {
			const rounds = await this.roundsService.getAll(query);
			return { message: 'Rounds successfully retrieved.', rounds };
		} catch (err) {
			throw err;
		}
	}

	// Get Single Round by ID
	@UseZodGuard('params', RoundDto.Entity.pick({ id: true }))
	@Get(':id')
	async getById(@Param(':id') id: string) {
		try {
			const round = await this.roundsService.getById({ id });
			return { message: 'Round successfully retrieved.', round };
		} catch (err) {
			throw err;
		}
	}

	// Create Round
	@UseZodGuard('body', RoundDto.Create)
	@Post()
	async create(@Body() data: RoundTypes.Create) {
		try {
			const round = await this.roundsService.create(data);
			return { message: 'Round successfully created.', round };
		} catch (err) {
			throw err;
		}
	}

	// Update Round
	@UseZodGuard('params', RoundDto.Entity.pick({ id: true }))
	@UseZodGuard('body', RoundDto.Update)
	@Patch(':id')
	async update(@Param('id') id: string, @Body() data: RoundTypes.Update) {
		try {
			const round = await this.roundsService.update(id, data);
			return { message: 'Round successfully updated.', round };
		} catch (err) {
			throw err;
		}
	}

	// Delete Round
	@UseZodGuard('params', RoundDto.Entity.pick({ id: true }))
	@Delete(':id')
	async delete(@Param('id') id: string) {
		try {
			const round = await this.roundsService.delete(id);
			return { message: 'Round successfully deleted.', round };
		} catch (err) {
			throw err;
		}
	}
}
