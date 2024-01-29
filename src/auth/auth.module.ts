import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { TokenRefreshStrategy } from 'src/token/token-refresh.strategy';
import { TokenModule } from 'src/token/token.module';
import { TokenStrategy } from 'src/token/token.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
	imports: [TokenModule, PassportModule, UsersModule],
	controllers: [AuthController],
	providers: [AuthService, TokenStrategy, TokenRefreshStrategy],
})
export class AuthModule {}
