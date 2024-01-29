import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import _ from 'lodash';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {
	constructor(configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get<string>('JWT_SECRET'),
			ignoreExpiration: false,
		});
	}

	async validate(payload: Record<string, any>) {
		const { sub: id, ...user } = _.omit(payload, ['exp', 'iat']);
		return { id, ...user };
	}
}
