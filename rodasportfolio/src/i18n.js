import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "TES5cz_xrw-M8qhbs53_MA"; // Add ypur API key;
const loadPath = `https://api.i18nexus.com/project_resources/translations/pt/default.json?api_key=TES5cz_xrw-M8qhbs53_MA`; // Add your loadpath;

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // The default language
        fallbackLng: "en",

        ns: ["default"],
        defaultNS: "default",

        // Tt shows the supported languages
        supportedLngs: ["en", "hi", "bn"],
        backend: {
            loadPath: loadPath,
        },
    });