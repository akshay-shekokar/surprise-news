import { LANGUAGE } from "./constants";

const localizedStrings = {
    [LANGUAGE.ma]: {
    },
    [LANGUAGE.en]: {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }
};

const Localization = () => {
    let language = LANGUAGE.ma;
    
    const getLanguage = () => {
        return language;
    };

    const setLanguage = (lang) => {
        language = LANGUAGE[lang] ? lang : LANGUAGE.ma;
    };

    const getString = (string) => {
        return localizedStrings[language][string] || localizedStrings[language][LANGUAGE.ma];
    };

    return {
        getLanguage,
        setLanguage,
        getString,
    }
};


export default Localization();
