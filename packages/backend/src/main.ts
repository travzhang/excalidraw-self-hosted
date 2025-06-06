import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as path from 'node:path';
import { json } from 'express';
import * as process from 'node:process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenv.config({
  path: path.resolve(__dirname, '../../../.env'),
});

async function bootstrap() {
  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create(AppModule);
  app.use(
    json({
      limit: '50mb',
    }),
  );
  // 设置全局前缀
  app.setGlobalPrefix('api');
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('无障碍景区系统 API')
    .setDescription('景区边界、轨迹上报与无障碍点管理接口')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.enableCors();
  await app.listen(process.env['PORT'] || 8080);
}

bootstrap();
