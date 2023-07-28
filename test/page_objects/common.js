/**
 * Export
 */
class Common {
	constructor() {
		/**
		 * Elements
		 */
		this.$pageHeader = title => $(`//a[text()="${title}"]`);
	}


	/**
	 * Methods
	 */

	/**
	 * Open up the application
	 * @param {string} url URL of the application
	 */
	async openUrl(url) {
		await browser.url(url);
		await browser.maximizeWindow();
	}
}

module.exports = Common;
