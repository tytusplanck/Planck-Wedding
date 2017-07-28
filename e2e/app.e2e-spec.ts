import { PlanckWeddingPage } from './app.po';

describe('planck-wedding App', function() {
  let page: PlanckWeddingPage;

  beforeEach(() => {
    page = new PlanckWeddingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
