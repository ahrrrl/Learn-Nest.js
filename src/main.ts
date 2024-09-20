import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 요청에서 넘어온 자료들을 원하는 실제 타입으로 변환해준다. 예를 들어, string으로 넘어온 id를 실제 숫자로 변환해준다.
    }),
  );
  await app.listen(3000);
}
bootstrap();
