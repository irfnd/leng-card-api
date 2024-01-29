import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenModule } from 'src/token/token.module';
import { UsersModule } from 'src/users/users.module';
import { GamesModule } from './games/games.module';
import { RoundsModule } from './rounds/rounds.module';

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
})
export class AppModule {}
