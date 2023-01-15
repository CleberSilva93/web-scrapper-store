import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { ComputerUpsertService } from 'src/computers/service/computer-upsert.service';
import { HandleInput } from './dto/handle.input';

@Injectable()
export class ScrapperService {
  constructor(private computerUpsertService: ComputerUpsertService) {}

  async handle({
    selector,
    linkToScrapper,
    filterBy,
  }: HandleInput): Promise<string[]> {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(linkToScrapper);

      const elements = await page.evaluate((resultsSelector) => {
        return [...document.querySelectorAll(resultsSelector)].map((anchor) => {
          const title = anchor
            .querySelector('.caption h4 a')
            .getAttribute('title');
          const price = anchor
            .querySelector('.caption h4')
            .textContent.split('|')[0]
            .trim();
          const description = anchor
            .querySelector('.caption .description')
            .textContent.split('|')[0]
            .trim();

          const reviews = anchor
            .querySelector('.ratings .pull-right')
            .textContent.split('|')[0]
            .trim();

          const rating = anchor
            .querySelectorAll('.ratings p')[1]
            .getAttribute('data-rating');

          return { title, price, description, reviews, rating };
        });
      }, selector);

      const findBy = elements.filter((element) =>
        element.title.toLowerCase().includes(filterBy.toLocaleLowerCase()),
      );

      await this.computerUpsertService.upsert({
        groupBy: filterBy,
        link: linkToScrapper,
        notes: findBy,
        updateAt: new Date(),
      });

      await browser.close();
      return [];
    } catch (error) {
      console.log({ error });
    }
  }
}
