import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import viCommonDict from "@/langs/locales/vi/common.json";
// import viErrorDict from "@/langs/locales/vi/error.json";
// import viValidationDict from "@/langs/locales/vi/validation.json";
import viAuthDict from "@/langs/locales/vi/auth.json";

import enCommonDict from "@/langs/locales/en/common.json";


i18n.use(initReactI18next).init({
    fallbackLng: "vi",
    lng: "vi",

    resources: {
        vi: {
            common: viCommonDict,
            // error: viErrorDict,
            // validation: viValidationDict,
            auth: viAuthDict,
        },
        en: {
            common: enCommonDict,
        },
    },

    ns: ["common", "error", "validation", "auth"],
    defaultNS: "common",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;