const {WebUtils}= require('./../utils/WebUtils');
const {GooglePage}=require('./GooglePage');
const { ASOSHomePage}=require('./ASOSHomePage');
const { ASOSPLPPage}=require('./ASOSPLPPage');
const{ASOSPDPPage}=require('./ASOSPDPPage');

class PageObjectManager{


    constructor(page,oWebUtils){
        this.page=page;
        this.oWebUtils=oWebUtils;
        this.OgooglePage=new GooglePage(page);
        this.OASOSHomePage= new ASOSHomePage(page);
        this.OASOSPLPPage=new ASOSPLPPage(page);
        this.OASOSPDPPage=new ASOSPDPPage(page);   

    }

     getWebUtils(){
        return this.oWebUtils;
    }
     getGooglePage(){
        return this.OgooglePage;
    }
     getASOSHomePage(){
        return this.OASOSHomePage;
    }
     getASOSPLPPage(){
        return this.OASOSPLPPage;
    }

     getASOSPDPPage(){
        return this.OASOSPDPPage;
    }
}

module.exports={PageObjectManager};
