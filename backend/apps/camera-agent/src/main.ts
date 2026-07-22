import { NestFactory } from '@nestjs/core';
import { CameraAgentModule } from './camera-agent.module';

async function bootstrap() {
  const app = await NestFactory.create(CameraAgentModule);
  await app.listen(process.env.port ?? 3000);
}
void bootstrap();
