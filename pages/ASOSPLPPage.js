const { expect } = require("../playwright.config");

class ASOSPLPPage{

    constructor(page){
        this.page=page;
        this.text_firstProduct= page.locator('xpath=//article[contains(@class,"productTile")]//p').first();
        this.link_firstProduct=page.locator('xpath=//article[contains(@class,"productTile")]').first()
    }

    async captureFirstProductDetails(){

        return  await this.text_firstProduct.textContent();

         

    }

    async clickOnFirstProduct(){
        await this.link_firstProduct.click();
    }

    async verifyTitileAfterSearch(){
        await expect(this.page.title()+"").toContainText("Search");
    }

   

    
}

module.exports={ASOSPLPPage};