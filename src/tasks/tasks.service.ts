import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { ScrapperService } from 'src/computers/scrapper/scrapper.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private scrapperService: ScrapperService) {}

  @Interval(+process.env.INTERVAL_SCRAPPER_MS || 20000)
  handleCron() {
    const scrapperServiceInput = {
      linkToScrapper:
        'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops',
      selector: '.thumbnail',
      filterBy: 'lenovo',
    };

    this.scrapperService.handle(scrapperServiceInput);
    this.logger.debug(
      `${scrapperServiceInput.linkToScrapper} scrapped and filtered by ${scrapperServiceInput.filterBy}`,
    );
  }
}
