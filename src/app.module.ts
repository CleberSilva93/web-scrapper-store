import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ScrapperModule } from './scrapper/scrapper.module';
import { Global } from '@nestjs/common/decorators';

@Global()
@Module({
  imports: [ScheduleModule.forRoot(), TasksModule, ScrapperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
