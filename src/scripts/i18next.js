
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import lang_ru from '@resources/langs/ru.json';
import lang_en from '@resources/langs/en.json';


i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
	supportedLngs: ['ru', 'en'],
	fallbackLng: 'ru',
	debug: false,
	resources: {
		en: { translation: lang_en},
		ru: {	translation: lang_ru}
	},
	detection: {
		order: ['localStorage', 'cookie'],
		caches: ['localStorage', 'cookie']
	},
	interpolation:{
		escapeValue: false
	}
});



export default i18next;
