class WebUtils{


    constructor(page){

        this.page=page;

    }

    async waitFoLoadState(){

        await this.page.waitForLoadState('domcontentloaded');
    }

    async waitForPageLoad() {
      await this.page.waitForLoadState("networkidle");

    }

    async takeScreenShot(testInfo,screenshotname) {

      const screenshot = await this.page.screenshot();
      await testInfo.attach(screenshotname, { body: screenshot, contentType: 'image/png' });

    }
    async takeFullPageScreenShot(testInfo,screenshotname) {

       
        const screenshot = await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
        await testInfo.attach(screenshotname, { body: screenshot, contentType: 'image/png' });
  
      }

}

module.exports={WebUtils}