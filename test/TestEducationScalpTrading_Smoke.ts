import {capitalCom} from "../src/component/CapitalComApp";
import {SignUp, baseUrl} from "../src/data/TestData";
import {loginForm } from "../src/component/LoginForm";
import {expect} from "chai";
import { ILanguage } from "../src/models/ILanguage";
import { languageHelper } from "../src/helpers/LanguageHelper";


describe('TC_11.03.06_01 | Education > Menu Item [Scalp Trading]', async function () {
   let language: ILanguage; 

   
    before(async function() {
      language = languageHelper.getLanguage();
      console.log(language);
        await browser.maximizeWindow();
        console.log(baseUrl())
        await browser.url(baseUrl());    
      
    });

    after(async function() {
      await $(loginForm.buttonCancel).click();
      await browser.url(baseUrl())
    });

    it.only('test verification Name of the form “Login“', async function () {
      await capitalCom.clickLoginHeader();
      const textLoginInPopupLogin = await $(loginForm.loginTextInField).getText();
      expect (textLoginInPopupLogin).to.equal(language.dictionary.loginInLoginPopup);             
    });

    it ('test verification link “Sign up” in form "Login"', async function () {
       const linkSingUpInLoginPopup = await $(loginForm.linkSingUp).getTagName();
       const textlinkSingUpInLoginPopup = await $(loginForm.linkSingUp).getText();
       expect (linkSingUpInLoginPopup).to.equal('a');
       expect (textlinkSingUpInLoginPopup).to.equal(SignUp);
    });
    
    it ('test verification Input field “Email address“” in form "Login"', async function () {
        const fieldEmailAddressInLoginPopup = await $(loginForm.fieldEmailAddress).isDisplayed();
        expect(fieldEmailAddressInLoginPopup).to.equal(true);
     });
     it ('test verification Input field “Password“ in form "Login"', async function () {
        const fieldPasswordInLoginPopup = await $(loginForm.fieldPassword).isDisplayed();
        expect(fieldPasswordInLoginPopup).to.equal(true);
     });
     it ('test verification Link “Forgot password?“ in form "Login"', async function () {
        const linkForgotPasswordInLoginPopup = await $(loginForm.linkForgotPassword).getTagName();
        const textlinkForgotPassword = await (await $(loginForm.linkForgotPassword)).getText();
        expect(linkForgotPasswordInLoginPopup).to.equal('a');
        expect(textlinkForgotPassword).to.equal('Forgot password?');
     });
     it ('test verification The button “Continue“ in form "Login"', async function () {
        const buttonContinueInLoginPopup = await $(loginForm.buttonContinue).isDisplayed();
        expect(buttonContinueInLoginPopup).to.equal(true);
     });
     it ('test verification Check box “Log me out after 7 days“ in form "Login"', async function () {
        const checkBoxInLoginPopup = await $(loginForm.checkBox).isDisplayed();
        expect(checkBoxInLoginPopup).to.equal(true);
     });
     it ('test verification the button socialsLogin Google in form "Login"', async function () {
        const  inputWithAccauntGoogleInLoginPopup = await $(loginForm.inputWithAccauntGoogle).isDisplayed();
        expect(inputWithAccauntGoogleInLoginPopup).to.equal(true);
     });
     it ('test verification the button socialsLogin Facebook in form "Login"', async function () {
        const inputWithAccauntFacebookInLoginPopup = await $(loginForm.inputWithAccauntFacebook).isDisplayed();
        expect(inputWithAccauntFacebookInLoginPopup).to.equal(true);
     });
     it ('test verification the button socialsLogin Apple in form "Login"', async function () {
        const inputWithAccauntAppleInLoginPopup = await $(loginForm.inputWithAccauntApple).isDisplayed();
        expect(inputWithAccauntAppleInLoginPopup).to.equal(true);
     });

    
});