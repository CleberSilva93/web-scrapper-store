import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ScrapperModule } from './computers/scrapper/scrapper.module';
import { Global } from '@nestjs/common/decorators';
import { DatabaseModule } from './database/database.module';
import { ComputersModule } from './computers/computers.module';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TasksModule,
    ScrapperModule,
    DatabaseModule,
    ComputersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
