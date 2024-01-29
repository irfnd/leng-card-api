import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { PrismaClientExceptionFilter } from 'src/prisma/prisma.exception';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const { httpAdapter } = app.get(HttpAdapterHost);

	// Setup
	app.enableCors({ origin: '*' });
	app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

	// Running
	await app.listen(process.env.PORT || 8888);
}
bootstrap();
