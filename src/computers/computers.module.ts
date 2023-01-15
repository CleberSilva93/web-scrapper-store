import { Module } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { ComputersController } from './computers.controller';
import { DatabaseModule } from 'src/database/database.module';
import { computersProviders } from './computers.providers';
import { ComputerUpsertService } from './service/computer-upsert.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ComputersController],
  providers: [ComputersService, ComputerUpsertService, ...computersProviders],
  exports: [ComputerUpsertService],
})
export class ComputersModule {}
