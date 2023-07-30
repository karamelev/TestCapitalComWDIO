export interface ILanguage {
    language: string;
    shortCode: string;
    dictionary: IDictionary;
}

export interface IDictionary {
    buttonLoginInHeader: string;
    buttonTreadeInHeader: string;
    loginInLoginPopup: string;
    linkSignUpInLoginPopup: string;
    linkForgotPpasswordInLoginPopup: string;
    buttonContinueInLoginPopup: string;
}