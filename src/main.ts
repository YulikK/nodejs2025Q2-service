import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, OpenAPIObject } from '@nestjs/swagger';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as yaml from 'js-yaml';
import { JwtAuthGuard } from './auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { LoggingService } from './logger/logger.service';
import { LoggingMiddleware } from './logger/logger.interceptor';
import { AllExceptionsFilter } from './logger/logger.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const jwtService = app.get(JwtService);
  const reflector = app.get(Reflector);
  const loggerService = app.get(LoggingService);
  const adapterHost = app.get(HttpAdapterHost);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalGuards(new JwtAuthGuard(jwtService, reflector));
  app.useGlobalInterceptors(new LoggingMiddleware(loggerService));
  app.useGlobalFilters(new AllExceptionsFilter(adapterHost, loggerService));

  const file = await fs.readFile(
    path.join(__dirname, '../doc/api.yaml'),
    'utf8',
  );
  const swaggerDocument = yaml.load(file);

  SwaggerModule.setup('api', app, swaggerDocument as OpenAPIObject);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
