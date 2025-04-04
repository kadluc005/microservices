import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMMUNICATION',
        transport: Transport.TCP, 
        options: { 
          port: 3001,
          host: 'communication-service',
         }
      },
      {
        name: 'ANALYTICS',
        transport: Transport.TCP,
        options: { 
          port: 3002,
          host: 'analytic-service',
        },
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
