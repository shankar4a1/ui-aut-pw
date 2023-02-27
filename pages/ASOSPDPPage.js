const{expect}=require('@playwright/test');


class ASOSPDPPage{


    constructor(page){
        this.page=page;
      
    }


    async validateProductNameOnPDP(productname){
        await expect(await this.page.getByRole('heading', { name: productname })) .toBeVisible();
    }
   
}

module.exports={ASOSPDPPage};