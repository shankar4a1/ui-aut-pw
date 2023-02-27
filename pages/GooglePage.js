

class GooglePage{
    

    constructor(page){
        this.page=page;
        this.btn_acceptAll=  page.getByRole('button', { name: 'Accept all' });
        this.input_gsearch= page.getByRole('combobox', { name: 'Search' })
        this.btn_gsearch=  page.getByRole('button', { name: 'Google Search' });
       // this.link_asos=  page.getByRole('link', { name: 'ASOS | Online Shopping for the Latest Clothes & Fashion https://www.asos.com' });
        this.link_asos=  page.locator("//h3[contains(text(),'ASOS |')]");

   
        
    }

    async clickAcceptCookies(){
        await this.btn_acceptAll.click();
    }

    async EnterSearchValue(searchValue){
        await this.input_gsearch.fill(searchValue);
    }

    
    async clickOnSearch(){
        await this.btn_gsearch.first().click()
    }

    async clickOnAsosLink(){
        await this.link_asos.click();
    }
    


}

module.exports={GooglePage}