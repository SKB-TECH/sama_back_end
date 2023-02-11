import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';
import { DurationInterceptor } from 'src/Intercepeteur/duration/duration.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: ['http://localhost:4200'],
  };

  dotenv.config();
  app.enableCors(corsOptions);
  app.use(morgan('dev'));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new DurationInterceptor());
  await app.listen(4200);
}
bootstrap();
