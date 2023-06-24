import {browser, $, $$} from "@wdio/globals";

export class Elements {
    education = $("div .cc-nav [data-type='nav_id96']");
    scalpTrading = $(".grid [data-type=nav_id530]");
    loginTextInFieldLogin = $("#l_overlay .h1");
    LinkSingUpnFieldLogin = $("//a[contains(text(),'Sign up')]");
    fieldEmailAddress = $('#l_f_email input[type="email"]');
    fieldPassword = $('#l_f_pass input[type="password"]');
    linkForgotPassword = $('//a[contains(text(),'Forgot password?')]');
    buttonContinue = $('#l_overlay form [type = submit]');
   checkBox = $('#l_overlay input[type = checkbox]');
};