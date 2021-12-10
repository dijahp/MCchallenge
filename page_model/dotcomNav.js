import { Selector, t } from 'testcafe';

class dotcomNav {
  constructor() {
    this.ourStoryBtn = Selector('li a').withAttribute('href', '/about/');
    this.learnCoFoundersBtn = Selector('p a').withText("Learn more about our Co-founders.")
  }

  async navigateToLeadershipPage() {
    await t.click(this.ourStoryBtn);
    await t.click(this.learnCoFoundersBtn);
  }
}

export default new dotcomNav();
