import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UseZodGuard } from 'nestjs-zod';
import { UserDto } from '../schemas';
import { TokenGuard } from '../token/token.guard';
import { Exclude } from '../utils/exclude.utils';
import { UsersService } from './users.service';

import type { UserTypes } from '../schemas';

@UseGuards(TokenGuard)
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	// Get All Users
	@UseZodGuard('query', UserDto.Query)
	@Get()
	async getUsers(@Query() query: UserTypes.Query) {
		try {
			const retrievedUser = await this.usersService.getAll(query);
			const users = retrievedUser ? Exclude.array(retrievedUser, ['password', 'role', 'gameIds']) : null;
			return { message: 'User successfully retrieved.', users };
		} catch (err) {
			throw err;
		}
	}

	// Get User By Unique Key
	@UseZodGuard('params', UserDto.Entity.pick({ username: true }))
	@Get(':username')
	async getUser(@Param('username') username: string) {
		try {
			const { user, ...others } = await this.usersService.getByUnique({ username });
			const reshapedUser = Exclude.object(user, ['password', 'role', 'gameIds']);
			const results = { ...reshapedUser, ...others };
			return { message: 'User successfully retrieved.', user: results };
		} catch (err) {
			throw err;
		}
	}

	// Create User
	@UseZodGuard('body', UserDto.Create)
	@Post()
	async createUser(@Body() data: UserTypes.Create) {
		try {
			const createdUser = await this.usersService.create(data);
			const user = Exclude.object(createdUser, ['password', 'role', 'gameIds']);
			return { message: 'User successfully created.', user };
		} catch (err) {
			throw err;
		}
	}

	// Update User
	@UseZodGuard('params', UserDto.Entity.pick({ id: true }))
	@UseZodGuard('body', UserDto.Update)
	@Patch(':id')
	async updateUser(@Param('id') id: string, @Body() data: UserTypes.Update) {
		try {
			const updatedUser = await this.usersService.update(id, data);
			const user = Exclude.object(updatedUser, ['password', 'role', 'gameIds']);
			return { message: 'User successfully updated.', user };
		} catch (err) {
			throw err;
		}
	}

	// Delete User
	@UseZodGuard('params', UserDto.Entity.pick({ id: true }))
	@Delete(':id')
	async deleteUser(@Param('id') id: string) {
		try {
			const deletedUser = await this.usersService.delete(id);
			const user = Exclude.object(deletedUser, ['password', 'role', 'gameIds']);
			return { message: 'User successfully deleted.', user };
		} catch (err) {
			throw err;
		}
	}
}
