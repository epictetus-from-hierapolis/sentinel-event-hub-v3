import { Module } from '@nestjs/common';
import { MediaWorkerController } from './media-worker.controller';
import { MediaWorkerService } from './media-worker.service';

@Module({
  imports: [],
  controllers: [MediaWorkerController],
  providers: [MediaWorkerService],
})
export class MediaWorkerModule {}
