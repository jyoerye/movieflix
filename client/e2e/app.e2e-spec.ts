import { MovieflixPage } from './app.po';

describe('movieflix App', function() {
  let page: MovieflixPage;

  beforeEach(() => {
    page = new MovieflixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
