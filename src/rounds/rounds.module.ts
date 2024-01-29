import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RoundsController } from './rounds.controller';
import { RoundsService } from './rounds.service';

@Module({
	imports: [PrismaModule],
	controllers: [RoundsController],
	providers: [RoundsService],
})
export class RoundsModule {}
