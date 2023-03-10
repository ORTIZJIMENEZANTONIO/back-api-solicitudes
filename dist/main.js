"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const response_interceptor_1 = require("./core/response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api/v1");
    app.enableCors({ origin: "*" });
    const port = 3003;
    const moduleRef = app.select(app_module_1.AppModule);
    const reflector = moduleRef.get(core_1.Reflector);
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor(reflector));
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle("SIGEBI SOLICITUDES")
        .setDescription("API REST DE SOLICITUDES")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.listen(port);
    console.log(`Listening in port: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map