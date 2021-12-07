import { Selector, t } from 'testcafe';

class dotcomNav {
  constructor() {
    this.ourStoryBtn = Selector('li a').withAttribute('href', '/about/');
    this.learnCoFoundersBtn = Selector('a').withAttribute(
      'href',
      '/about/founders',
    );
  }

  async navigateToLeadershipPage() {
    await t.click(this.ourStoryBtn);
    await t.click(this.learnCoFoundersBtn);
  }
}

export default new dotcomNav();
