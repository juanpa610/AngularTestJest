import { WebsitePipe } from './website.pipe';

describe('WebsitePipe', () => {
  let pipe = new WebsitePipe();
  let domain = 'conrad.com';
  let expectedWebSiteUrl = 'https://conrad.com';

  beforeEach(() => {
    pipe = new WebsitePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a string like `https://conrad.com`', () => {
    const webSiteTransform = pipe.transform(domain, 'https', '://');
    expect(webSiteTransform).toBe(expectedWebSiteUrl);
  });

});
