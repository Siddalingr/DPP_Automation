const homePage = require('../page_objects/homePage');
const env = require('../../test-data/url.json')
const testData = require('../../test-data/testData.json');

describe('QaWolf.com  ', () => {
		it('should be able to launch url', async () => {
			await homePage.openUrl(env.baseUrl);
			await expect(browser).toHaveUrl('https://www.qawolf.com/');
		});
		it('user should be able to select  industries and click on startups', async () => {
			await homePage.startUps(testData.industries, testData.Startups);
			expect(await homePage.$homePageHeader(testData.Startups).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/startups');
		});
		it('user should be able to select  industries and click on Fintech', async () => {
			await homePage.fineTech(testData.industries, testData.FineTech);
			expect(await homePage.$homePageHeader(testData.FineTech).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/fintech');
		});
	});

