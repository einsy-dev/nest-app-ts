import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DefaultInterceptor } from './default/default.interceptor';
import { DefaultPipe } from './default/default.pipe';
import { Schema } from './default/schemas/default.schema';
import { DefaultFilter } from './default/default.filter';

async function App() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new DefaultFilter());
  app.useGlobalInterceptors(new DefaultInterceptor());
  app.useGlobalPipes(new DefaultPipe(Schema));
  await app.listen(3000);
}
App();
