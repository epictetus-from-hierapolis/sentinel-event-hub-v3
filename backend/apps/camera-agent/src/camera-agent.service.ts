import { Injectable } from '@nestjs/common';

@Injectable()
export class CameraAgentService {
  getHello(): string {
    return 'Hello World!';
  }
}
