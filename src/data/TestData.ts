import { languageHelper } from "../helpers/LanguageHelper";
import { Languages } from "./Languages";

export function baseUrl(): string  {
    return languageHelper.language === Languages.EN ? 
        "https://capital.com/learn-to-trade" : 
        `https://capital.com/${languageHelper.language!.shortCode}`
}
export const EducationScalpTrading ='https://capital.com/scalping';

