import nightmare from 'nightmare';

describe('Posts', () => {
  it('should open about page', async () => {
    let page = nightmare({ show: true }).goto('http://localhost:3000/about');
    const text = await page.evaluate(() => (document.body.textContent)).end();
    expect(text).toContain('Sorry this page cannot tell you anything about this blog...');
  });

  it('should redirect to multiple pages', async () => {
    let page = nightmare({ show: true }).goto('http://localhost:3000/about');
    const url = await page.click('#main')
      .wait()
      .click('.btn-primary')
      .end()
      .url();
    expect(url).toEqual('http://localhost:3000/posts/new');
  });
});
