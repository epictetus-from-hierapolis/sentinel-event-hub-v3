import { Module } from '@nestjs/common';
import { CameraAgentController } from './camera-agent.controller';
import { CameraAgentService } from './camera-agent.service';

@Module({
  imports: [],
  controllers: [CameraAgentController],
  providers: [CameraAgentService],
})
export class CameraAgentModule {}
