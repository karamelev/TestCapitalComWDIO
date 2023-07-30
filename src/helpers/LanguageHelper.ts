import { ILanguage } from "../models/ILanguage";
import { Languages } from "../data/Languages";

class LanguageHelper {
    public language: ILanguage | undefined;

    public getLanguage () {
        return this.language ? 
            this.language : 
            this.setLanguageFromCmd();
    }

    public setLanguageFromCmd () {
        let cmdArgs = process.argv;
        let arg = cmdArgs.find(value => value.match(/^--lg:/));
        if (!arg) {
           this.language = Languages.EN;
           return this.language;
        }
        arg = arg!.replace(/^--lg:/, '').toLowerCase();

        let lg = Object.values(Languages).find(value => value.language.toLowerCase() === arg || value.shortCode.toLowerCase() === arg);
        if (lg) {
            this.language = lg;
            return this.language;
        } 
        throw new Error(`Data for ${arg} is not specified`);
    }
}
export const languageHelper = new LanguageHelper();