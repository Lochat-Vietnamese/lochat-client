import { LangsEnum } from "@/enums/langs.enum";
import i18n from "@/langs";
import { useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";

export const LangsProvider = ({ children }: { children: React.ReactNode }) => {
    const detectLang = () => {
        if (typeof window === "undefined") return LangsEnum.ENGLISH;
        const currentLang = localStorage.getItem("lang");

        if (currentLang && Object.values(LangsEnum).includes(currentLang as LangsEnum)) {
            return currentLang;
        } 
        
        const systemLang = navigator.language.split("-")[0];
        if (Object.values(LangsEnum).includes(systemLang as LangsEnum)) {
            localStorage.setItem("lang", systemLang);
            return systemLang;
        }

        localStorage.setItem("lang", LangsEnum.ENGLISH);
        return LangsEnum.ENGLISH;
    };

    const lang = useMemo(detectLang, []);

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
};
