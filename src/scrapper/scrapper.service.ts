import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class ScrapperService {
  async handle(linkToScrapper: string, selector: string): Promise<string[]> {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(linkToScrapper);

      await page.waitForSelector(selector);

      const links = await page.evaluate((resultsSelector) => {
        return [...document.querySelectorAll(resultsSelector)].map((anchor) => {
          const title = anchor.textContent.split('|')[0].trim();
          return `${title} - ${anchor}`;
        });
      }, selector);

      await browser.close();
      return links;
    } catch (error) {
      console.log({ error });
    }
  }
}
