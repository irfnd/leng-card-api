import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'src/app.controller';
import { AuthModule } from 'src/auth/auth.module';
import { GamesModule } from 'src/games/games.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoundsModule } from 'src/rounds/rounds.module';
import { TokenModule } from 'src/token/token.module';
import { UsersModule } from 'src/users/users.module';

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
