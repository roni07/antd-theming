import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const language = JSON.parse(localStorage.getItem("lang")) ?? "en";

i18n.use(initReactI18next).init({
    fallbackLng: language,
    lng: language,
    resources: {
        en: {
            translations: require('./locales/en.json')
        },
        bn: {
            translations: require('./locales/bn.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'bn'];

export default i18n;
