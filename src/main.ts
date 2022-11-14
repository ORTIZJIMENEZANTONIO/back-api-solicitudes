import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  // Configurar títulos de documnentación
  const options = new DocumentBuilder() 
    .setTitle('SIGEBI PROCEDURES REST API')
    .setDescription('API REST DE SIGEBI PROCEDURES')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  
  // La ruta en que se sirve la documentación
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true,
      transformOptions:{
        enableImplicitConversion: true
      }
    }
  ));
  
  app.listen(3003);
  // Solicitudes 3003
  // Bienes 3004
  // generar entidades y relaciones
  // npx typeorm-model-generator -h localhost -d DB -u USER -x PASS -e postgres(DBUSER) -o E:/Tempo/NestJS/entities -p 5432
  // npx typeorm-model-generator -h localhost -d DB -u USER -x PASS -e postgres(DBUSER) -o E:/Tempo/NestJS/entities -p 5432
}

bootstrap();