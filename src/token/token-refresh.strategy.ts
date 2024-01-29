import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import _ from 'lodash';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { Request } from 'express';

@Injectable()
export class TokenRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
	constructor(
		configService: ConfigService,
		private jwtService: JwtService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get<string>('JWT_SECRET'),
			ignoreExpiration: true,
			passReqToCallback: true,
		});
	}

	async validate(req: Request, payload: Record<string, any>) {
		const user = _.omit(payload, ['exp', 'iat']);
		const oldToken = req.headers.authorization?.split(' ')[1];
		const checkToken = Date.now() >= payload.exp * 1000;
		if (checkToken) return { isNew: true, token: await this.jwtService.signAsync(user) };
		return { isNew: false, token: oldToken };
	}
}
