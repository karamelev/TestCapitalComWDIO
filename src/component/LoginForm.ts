class LoginForm {
    loginTextInField = ".overlay:not(.hidden) .modal .form-container-small-header >div";
    linkSingUp = ".overlay:not(.hidden) .modal .l_btn_signup";
    fieldEmailAddress = '.overlay:not(.hidden) .modal input[type="email"]';
    fieldPassword = '.overlay:not(.hidden) .modal input[type="password"]';
    linkForgotPassword = '.overlay:not(.hidden) .modal a.l_btn_forgot';
    buttonContinue = '.overlay:not(.hidden) .modal form [type = submit]';
    checkBox = '.overlay:not(.hidden) .modal  input[type = checkbox]';
    inputWithAccauntGoogle = '.overlay:not(.hidden) .modal .socialsLogin__btn--google';
    inputWithAccauntApple = '.overlay:not(.hidden) .modal .sn-login-ap:not(.hidden)';
    inputWithAccauntFacebook = '.overlay:not(.hidden) .modal .sn-login-fb';
    buttonCancel = '.overlay:not(.hidden) .modal .l_cancel'
}
export const loginForm = new LoginForm();