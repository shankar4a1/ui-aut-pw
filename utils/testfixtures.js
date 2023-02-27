const base = require('@playwright/test');
const { PageObjectManager } = require('./../pages/PageObjectManager');

const { WebUtils } = require('./WebUtils');




exports.test = base.test.extend({

  
  
  page: async ({ page }, use) => {

    await page.goto("/");


    await use(page);

  },

  oWebUtils : async({ page }, use)=>{
    await use(new WebUtils(page));

  },
  
  oPageObjectManager: async ({ page,oWebUtils }, use) => {
    await use(new PageObjectManager(page,oWebUtils));
  }



 
});

exports.expect = base.expect;



