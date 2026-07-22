import { NestFactory } from '@nestjs/core';
import { MediaWorkerModule } from './media-worker.module';

async function bootstrap() {
  const app = await NestFactory.create(MediaWorkerModule);
  await app.listen(process.env.port ?? 3000);
}
void bootstrap();
