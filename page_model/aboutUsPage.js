import { Selector, ClientFunction, t } from 'testcafe';

class aboutUsPage {
  constructor() {
    this.ceoName = Selector('.h5.margin--bottom-2').withText('Ben Chestnut');
    this.ceoTitle = Selector('.copy strong').withText('Co-founder and CEO');
    this.ceoDesc = Selector('.normalize p').nth(0);

    this.coFounderName = Selector('.h5.margin--bottom-2').withText(
      'Dan Kurzius',
    );
    this.coFounderTitle = Selector('.copy strong').withText('Co-founder');
    this.coFounderDesc = Selector('.normalize p').nth(1);
  }

  //Verify leadership exists
  async verifyLeadershipExists() {
    await t.expect(this.ceoName.exists).ok().expect(this.ceoName.exists).ok();
  }

  //Function for download process
  async downloadCsv(array) {
    let csv = 'Name,Title,Description\n';
    await array.forEach((row) => {
      csv += row.join(',');
      csv += '\n';
    });

    const downloadProcess = await ClientFunction((filename, csv) => {
      let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      let hiddenEl = document.createElement('a');
      let url = URL.createObjectURL(blob);
      hiddenEl.setAttribute('href', url);
      hiddenEl.setAttribute('download', filename);
      hiddenEl.style.visibility = 'hidden';
      document.body.appendChild(hiddenEl);
      hiddenEl.click();
      document.body.removeChild(hiddenEl);
    });

    await downloadProcess('kpleadership.csv', csv);
  }

  //Generates CSV and downloads it
  async saveLeadershipExport() {
    let ceoArray = [
      await this.ceoName.innerText,
      await this.ceoTitle.innerText,
      '"' + (await this.ceoDesc.innerText) + '"',
    ];
    let coFounderArray = [
      await this.coFounderName.innerText,
      await this.coFounderTitle.innerText,
      '"' + (await this.coFounderDesc.innerText) + '"',
    ];
    let leadershipArray = [ceoArray, coFounderArray];

    await this.downloadCsv(leadershipArray);
  }
}

export default new aboutUsPage();
