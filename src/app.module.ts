import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoundsModule } from './rounds/rounds.module';
import { TokenModule } from './token/token.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		PrismaModule,
		TokenModule,
		AuthModule,
		UsersModule,
		GamesModule,
		RoundsModule,
	],
	controllers: [AppController]
})
export class AppModule {}
