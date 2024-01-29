import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UsersService } from 'src/users/users.service';

import type { UserTypes } from 'src/schemas';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	// Verify Password
	private async verifyPassword(hash: string, password: string) {
		return await argon2.verify(hash, password);
	}

	// Login
	async login(data: UserTypes.Validate) {
		const getUser = await this.usersService.getAdmin({ email: data.email });
		if (getUser && (await this.verifyPassword(getUser.password, data.password))) {
			const { id: sub, email, username, name } = getUser;
			const newToken = await this.jwtService.signAsync({ sub, email, username, name });
			return { accessToken: newToken };
		} else {
			throw new UnauthorizedException('Invalid credentials');
		}
	}
}
