import {baseUrl} from "../data/TestData.ts";
import {$, browser} from '@wdio/globals'



class CapitalComApp {
    loginButtonInHeader = $("#wg_loginBtn");
    tradeButtonInHeader = $(".js_signup[data-type='btn_header']");

    async open (url = baseUrl) {
        await browser.url(url);
    }

    async clickLoginHeader () {
        await $(this.loginButtonInHeader).click();
    }

    async clickTradeHeader () {
        await $(this.tradeButtonInHeader).click();
    }

}
export const capitalCom = new CapitalComApp();