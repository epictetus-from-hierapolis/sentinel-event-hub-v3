import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaWorkerService {
  getHello(): string {
    return 'Hello World!';
  }
}
