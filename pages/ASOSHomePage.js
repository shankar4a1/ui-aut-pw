class ASOSHomePage{

    constructor(page){
        this.page=page;
        this.input_searchProduct= page.getByPlaceholder("Search for items and brands")
    }

    async searchProductName(product){
        await this.input_searchProduct.fill(product);
        await this.page.keyboard.press('Enter');
    }
}

module.exports={ASOSHomePage}