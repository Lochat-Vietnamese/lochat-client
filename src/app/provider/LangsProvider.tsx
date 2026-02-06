import i18n from "@/langs";
import { I18nextProvider } from "react-i18next";

export const LangsProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
};
