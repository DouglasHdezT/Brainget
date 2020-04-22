import i18n from 'i18n-js';

import en_traslation from './strings/en';
import es_traslation from './strings/es';

const EN_LANG = "en";
const ES_LANG = "es";

class TranslationHelper {

	constructor(){
		this.language = "en";

		i18n.translations = {
			en: en_traslation,
			es: es_traslation,
		}

		i18n.locale = this.language;
		i18n.defaultLocale = "en";
		i18n.fallbacks = true;
	}

	setLanguage = (language) => {
		const languageRef = language.length > 2 ? language.substring(0,2) : language;

		if (this.language !== languageRef){
			switch(languageRef){
				case EN_LANG:
				case ES_LANG:
					this.language = languageRef; 
					i18n.locale = this.language;
					break;
			}
		}
		console.log(this.language);
	}

	getStringValue = (key) => {
		return i18n.t(key);
	}
}

export default new TranslationHelper();