import {useState} from 'react';
import dictionary from '../locales/dictionary';

const useTranslation = (initialLang = 'en') => {
    const [language, setLanguage] = useState(initialLang);

    const translate = (key) => {
        return dictionary[language][key] || key;
    };

    return {
        translate,
        setLanguage,
    };
};

export default useTranslation;
