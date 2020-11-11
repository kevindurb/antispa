import pug from 'pug';
import path from 'path';
import cheerio from 'cheerio';

export const renderView = (view: string, options: object) =>
  cheerio.load(
    pug.renderFile(
      path.resolve(__dirname, `../src/views/${view}.pug`),
      options,
    ),
  );
