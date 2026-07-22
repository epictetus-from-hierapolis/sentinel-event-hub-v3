import { Test, TestingModule } from '@nestjs/testing';
import { MediaWorkerController } from './media-worker.controller';
import { MediaWorkerService } from './media-worker.service';

describe('MediaWorkerController', () => {
  let mediaWorkerController: MediaWorkerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MediaWorkerController],
      providers: [MediaWorkerService],
    }).compile();

    mediaWorkerController = app.get<MediaWorkerController>(
      MediaWorkerController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mediaWorkerController.getHello()).toBe('Hello World!');
    });
  });
});
