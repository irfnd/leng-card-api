import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UseZodGuard } from 'nestjs-zod';
import { UserDto } from '../schemas';
import { TokenRefreshContext } from '../token/token-refresh.decorator';
import { TokenRefreshGuard } from '../token/token-refresh.guard';
import { AuthService } from './auth.service';

import type { UserTypes } from '../schemas';

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	// Login
	@HttpCode(HttpStatus.OK)
	@UseZodGuard('body', UserDto.Validate)
	@Post('login')
	async login(@Body() data: UserTypes.Validate) {
		try {
			const tokens = await this.authService.login(data);
			return { message: 'You have successfully logged in.', tokens };
		} catch (err) {
			throw err;
		}
	}

	// Refresh Token
	@UseGuards(TokenRefreshGuard)
	@Get('refresh-token')
	async refreshToken(@TokenRefreshContext() tokenCtx: { isNew: boolean; token: string }) {
		const message = tokenCtx.isNew ? 'Your Token has been refreshed.' : 'Your Token has not expired yet.';
		return { message, token: tokenCtx.token };
	}
}
