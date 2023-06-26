module.exports = class Common {
  constructor()
  {
this.$homePageHeader = () => $(`//a[text()="Our services"]`);
  }
  async openUrl()
  {
    await browser.url(`https://www.testingmavens.com/`);
    await browser.maximizeWindow();
   await this.$homePageHeader().waitForDisplayed(10000,true,'Home pahe header is not displayed');
  }
}
