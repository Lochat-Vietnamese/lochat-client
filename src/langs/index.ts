import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import viErrorDict from "@/langs/locales/vi/error.json";
import viValidationDict from "@/langs/locales/vi/validation.json";
import viHomeDict from "@/langs/locales/vi/home.json";
import viSignupDict from "@/langs/locales/vi/signup.json";
import viSigninDict from "@/langs/locales/vi/signin.json";

// import enErrorDict from "@/langs/locales/en/error.json";
import enValidationDict from "@/langs/locales/en/validation.json";
import enHomeDict from "@/langs/locales/en/home.json";
import enSigninDict from "@/langs/locales/en/signin.json";
import enSignupDict from "@/langs/locales/en/signup.json";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",

    resources: {
        vi: {
            // error: viErrorDict,
            validation: viValidationDict,
            home: viHomeDict,
            signup: viSignupDict,
            signin: viSigninDict,
        },
        en: {
            // error: enErrorDict,
            validation: enValidationDict,
            home: enHomeDict,
            signup: enSignupDict,
            signin: enSigninDict
        },
    },

    ns: ["error", "validation", "hone", "signup", "signin"],
    defaultNS: "home",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;