import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './created-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject("ANALYTICS")
    private readonly analyticsClient: ClientProxy,

    @Inject("COMMUNICATION")
    private readonly communicationClient: ClientProxy,
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest){
    this.users.push(createUserRequest);
    this.communicationClient.emit("user_created", new CreateUserEvent(createUserRequest.email)); 
    this.analyticsClient.emit("user_created", new CreateUserEvent(createUserRequest.email)); 
 }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
