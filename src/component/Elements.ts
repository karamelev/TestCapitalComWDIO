import {browser, $, $$} from "@wdio/globals";

export class Elements {
    education = $("div .cc-nav [data-type='nav_id96']");
    scalpTrading = $(".grid [data-type=nav_id530]");
    loginTextInFieldLogin = $("#l_overlay .h1");
    LinkSingUpnFieldLogin = $("#l_overlay .l_btn_signup");
    fieldEmailAddress = $('#l_f_email input[type="email"]');
    fieldPassword = $('#l_f_pass input[type="password"]');
    linkForgotPassword = $('#l_overlay a.l_btn_forgot');
    buttonContinue = $('#l_overlay form [type = submit]');
    checkBox = $('#l_overlay input[type = checkbox]');
};