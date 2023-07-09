import { useState } from 'react';

export let language = 'en';

export const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const toggleLanguage = () => {
        language = language === 'en' ? 'es' : 'en';
        setCurrentLanguage(language);
    };

    return { currentLanguage, toggleLanguage };
};
