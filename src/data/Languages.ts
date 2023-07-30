import {ILanguage} from "../models/ILanguage";

export const Languages: {[key:string]:ILanguage}  = {
    EN: {
        language: 'English',
        shortCode: 'en',
        dictionary: {
            buttonLoginInHeader: 'Login',
            buttonTreadeInHeader: 'Treade',
            loginInLoginPopup: 'Login',
            linkSignUpInLoginPopup: 'Sign up',
            linkForgotPpasswordInLoginPopup:'Forgot password?',
            buttonContinueInLoginPopup: 'Continue'
        }
    },
    RU: {
        language: 'Русский',
        shortCode: 'ru',
        dictionary: {
            buttonLoginInHeader: 'Boйти',
            buttonTreadeInHeader: 'Сделка',
            loginInLoginPopup: 'Войти в систему',
            linkSignUpInLoginPopup: 'Зарегистрироваться',
            linkForgotPpasswordInLoginPopup: 'Забыли пароль?',
            buttonContinueInLoginPopup: 'Продолжить'
        }
        
    }
}





