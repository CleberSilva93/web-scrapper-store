import { Module } from '@nestjs/common';
import { ComputersModule } from 'src/computers/computers.module';
import { ScrapperService } from './scrapper.service';

@Module({
  controllers: [],
  providers: [ScrapperService],
  exports: [ScrapperService],
  imports: [ComputersModule],
})
export class ScrapperModule {}
