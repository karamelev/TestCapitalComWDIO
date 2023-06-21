import {Elements} from "../data/Elements.ts"
export  class Result {

    async clickButtonLogin () {
        await document.getElementById("#wg_loginBtn").click();
    }

    async clickButtonTradeHeader () {
        await document.getElementById(".js_signup[data-type='btn_header']").click();
    }

    async clickEducationInMenu () {
        await document.getElementById( education ).click();
    }


}