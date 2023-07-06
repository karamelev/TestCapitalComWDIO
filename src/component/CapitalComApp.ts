import {baseUrl} from "../data/TestData";



class CapitalComApp {

    loginButtonInHeader = ".cc-header [data-type=btn_header_login]";
    tradeButtonInHeader = ".js_signup[data-type='btn_header']";
    loginPopup = ".overlay:not(.hidden) .modal";
    // loginTextInFieldLogin = ".overlay:not(.hidden) .modal .form-container-small-header >div";

    async open (url = baseUrl) {
        await browser.url(url);
    }

    async clickLoginHeader () {
        await $(this.loginButtonInHeader).click();
        await $(this.loginPopup).waitForDisplayed();
    }




    // async clickTradeHeader () {
    //     await $(this.tradeButtonInHeader).click();
    // }

    // async getTextLoginFromLoginPopup () {
    //     await $(this.loginTextInFieldLogin).getText()(".overlay:not(.hidden) .modal .form-container-small-header .h1");
    // }

}
export const capitalCom = new CapitalComApp();