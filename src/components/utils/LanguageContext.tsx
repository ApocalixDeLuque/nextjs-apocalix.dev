import React, { createContext, useState, PropsWithChildren } from 'react';

export const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
