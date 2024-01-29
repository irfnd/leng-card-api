"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_exception_1 = require("./prisma/prisma.exception");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.enableCors({ origin: '*' });
    app.useGlobalFilters(new prisma_exception_1.PrismaClientExceptionFilter(httpAdapter));
    await app.listen(process.env.PORT || 8888);
}
bootstrap();
//# sourceMappingURL=main.js.map