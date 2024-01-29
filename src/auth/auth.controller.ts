import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UseZodGuard } from 'nestjs-zod';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from 'src/schemas';
import { TokenRefreshContext } from 'src/token/token-refresh.decorator';
import { TokenRefreshGuard } from 'src/token/token-refresh.guard';

import type { UserTypes } from 'src/schemas';

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
