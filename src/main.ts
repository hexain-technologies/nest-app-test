import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log('Starting application...');
  Logger.log('Port: ' + process.env.PORT);
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
