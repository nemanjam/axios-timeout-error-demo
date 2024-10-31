import { fetchHtml, Result } from './axios-demo';

const pageUrl = 'https://news.ycombinator.com/item?id=41966114';

const main = async () => {
  const result: Result = await fetchHtml(pageUrl);

  console.log('result', result);
};

main();
