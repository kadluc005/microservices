import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions> (
    AppModule,
    {
      transport: Transport.TCP,
      options:{
        host: '0.0.0.0',
        port: 3001
      }
    }
  );
  app.listen();
  console.log(`Service 1 listening on port 3001`);
}
bootstrap();
