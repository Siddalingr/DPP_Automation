const Commom = require("./common");

class Homepage extends Commom {
	constructor() {
		super();
		this.$homePageHeader = (header) =>  $(`//h1[contains(text(),'${header}')]`);
		this.$topNavigationBar = (menu) => $(`//div[contains(text(),'${menu}')]`);
		this.$startups = (name) => $(`//div[contains(text(),'${name}')]`);
		this.$fineTech = (name) => $(`(//a[text()="${name}"])[2]`);
	}

/**
 * Methods
*/

/**
 * Method to Click on StartUps
 * @param {String} menu 
 * @param {String} name 
 */
async startUps(menu, name) {
	await this.$topNavigationBar(menu).moveTo(47, 39);
	await browser.pause(1000);
	await this.$startups(name).click();
}

/**
 * Method to click on FineTech
 * @param {String} menu 
 * @param {String} name 
 */
async fineTech(menu, name) {
	await this.$topNavigationBar(menu).moveTo(47, 39);
	await browser.pause(1000);
	await this.$fineTech(name).click();
}
}
module.exports = new Homepage();
