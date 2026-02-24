import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import viErrorDict from "@/langs/locales/vi/error.json";
// import viValidationDict from "@/langs/locales/vi/validation.json";
import viHomeDict from "@/langs/locales/vi/home.json";
import viAuthDict from "@/langs/locales/vi/auth.json";

// import enErrorDict from "@/langs/locales/en/error.json";
// import enValidationDict from "@/langs/locales/en/validation.json";
import enHomeDict from "@/langs/locales/en/home.json";
import enAuthDict from "@/langs/locales/en/auth.json";


i18n.use(initReactI18next).init({
    fallbackLng: "vi",
    lng: "vi",

    resources: {
        vi: {
            // error: viErrorDict,
            // validation: viValidationDict,
            home: viHomeDict,
            auth: viAuthDict,
        },
        en: {
            // error: enErrorDict,
            // validation: enValidationDict,
            home: enHomeDict,
            auth: enAuthDict,
        },
    },

    ns: ["home", "error", "validation", "auth"],
    defaultNS: "home",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;