import { Module } from '@nestjs/common';
import { ScrapperModule } from 'src/computers/scrapper/scrapper.module';
import { TasksService } from './tasks.service';

@Module({
  controllers: [],
  providers: [TasksService],
  imports: [ScrapperModule],
})
export class TasksModule {}
