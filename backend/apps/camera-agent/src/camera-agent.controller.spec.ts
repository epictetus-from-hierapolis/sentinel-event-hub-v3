import { Test, TestingModule } from '@nestjs/testing';
import { CameraAgentController } from './camera-agent.controller';
import { CameraAgentService } from './camera-agent.service';

describe('CameraAgentController', () => {
  let cameraAgentController: CameraAgentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CameraAgentController],
      providers: [CameraAgentService],
    }).compile();

    cameraAgentController = app.get<CameraAgentController>(
      CameraAgentController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cameraAgentController.getHello()).toBe('Hello World!');
    });
  });
});
