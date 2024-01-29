import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoundsController } from 'src/rounds/rounds.controller';
import { RoundsService } from 'src/rounds/rounds.service';

@Module({
	imports: [PrismaModule],
	controllers: [RoundsController],
	providers: [RoundsService],
})
export class RoundsModule {}
