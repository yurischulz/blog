import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/prisma.service';
import { HTTPModule } from './infra/http.module';

@Module({
  imports: [HTTPModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
