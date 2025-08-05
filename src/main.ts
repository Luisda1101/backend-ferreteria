import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initializeMappers } from './Application/Mappers';

initializeMappers();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
        .setTitle('Ferreteria API')
        .setDescription('Documentación de la API de Ferreteria')
        .setVersion('1.0')
        .build();
        app.enableCors({
            origin: '*',
        });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
