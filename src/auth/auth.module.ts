import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TokenRefreshStrategy } from '../token/token-refresh.strategy';
import { TokenModule } from '../token/token.module';
import { TokenStrategy } from '../token/token.strategy';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	imports: [TokenModule, PassportModule, UsersModule],
	controllers: [AuthController],
	providers: [AuthService, TokenStrategy, TokenRefreshStrategy],
})
export class AuthModule {}
