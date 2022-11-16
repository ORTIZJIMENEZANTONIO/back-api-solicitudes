import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ResponseInterceptor } from "./core/response.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableCors({ origin: "*" });

  const port = 3003;

  const moduleRef = app.select(AppModule);
  const reflector = moduleRef.get(Reflector);
  app.useGlobalInterceptors(new ResponseInterceptor(reflector));

  // Configurar títulos de documnentación
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle("SIGEBI SOLICITUDES")
    .setDescription("API REST DE SOLICITUDES")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup("api", app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  app.listen(port);
  console.log(`Listening in port: ${port}`);
  // Solicitudes 3003
  // Bienes 3004
  // generar entidades y relaciones
  // npx typeorm-model-generator -h localhost -d DB -u USER -x PASS -e postgres(DBUSER) -o E:/Tempo/NestJS/entities -p 5432
  // npx typeorm-model-generator -h localhost -d DB -u USER -x PASS -e postgres(DBUSER) -o E:/Tempo/NestJS/entities -p 5432
}

bootstrap();
