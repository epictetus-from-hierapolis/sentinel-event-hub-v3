import { Controller, Get } from '@nestjs/common';
import { CameraAgentService } from './camera-agent.service';

@Controller()
export class CameraAgentController {
  constructor(private readonly cameraAgentService: CameraAgentService) {}

  @Get()
  getHello(): string {
    return this.cameraAgentService.getHello();
  }
}
