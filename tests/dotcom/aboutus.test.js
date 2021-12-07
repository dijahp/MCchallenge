import aboutUsPage from '../../page_model/aboutUsPage';
import dotcomNav from '../../page_model/dotcomNav';

fixture`Save Mailchimp Leadership to a csv file`.page`https://mailchimp.com/`;

test('Export csv with leadership member information', async (t) => {
  await dotcomNav.navigateToLeadershipPage();
  await aboutUsPage.verifyLeadershipExists();
  await aboutUsPage.saveLeadershipExport();
});
