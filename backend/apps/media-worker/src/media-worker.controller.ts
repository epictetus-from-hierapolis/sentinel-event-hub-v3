import { Controller, Get } from '@nestjs/common';
import { MediaWorkerService } from './media-worker.service';

@Controller()
export class MediaWorkerController {
  constructor(private readonly mediaWorkerService: MediaWorkerService) {}

  @Get()
  getHello(): string {
    return this.mediaWorkerService.getHello();
  }
}
