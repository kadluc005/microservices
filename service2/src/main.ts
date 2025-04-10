import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3002
    }
  });
  await app.startAllMicroservices()
  await app.listen(3003);
  console.log(`Service 2 running on http://localhost:3003 and TCP microservice on port 3002`);
}
bootstrap();
