import { createContext, useState, useContext, PropsWithChildren } from 'react';

interface LanguageContextValue {
    language: string;
    toggleLanguage: () => void;
    getText: (enText: string, esText: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
    language: 'en',
    toggleLanguage: () => {},
    getText: (enText: string, esText: string) => enText,
})

export const LanguageProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'))
    }

    const getText = (enText: string, esText: string) => {
        return language === 'en' ? enText : esText;
    }

    const contextValue: LanguageContextValue = {
        language,
        toggleLanguage,
        getText,
    }

  return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage(): LanguageContextValue {
    return useContext(LanguageContext);
}
