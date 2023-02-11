"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const morgan = require("morgan");
const dotenv = require("dotenv");
const duration_interceptor_1 = require("./Intercepeteur/duration/duration.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: ['http://localhost:4200'],
    };
    dotenv.config();
    app.enableCors(corsOptions);
    app.use(morgan('dev'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.useGlobalInterceptors(new duration_interceptor_1.DurationInterceptor());
    await app.listen(4200);
}
bootstrap();
//# sourceMappingURL=main.js.map