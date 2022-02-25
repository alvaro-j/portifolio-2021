import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		// we init with resources
		resources: {
			en: {
				translations: {
					Contact: "Contact",
					"How to find me": "How to find me",
					Education: "Education",
					"Analysis and Systems Development": "Analysis and Systems Development",
					Projects: "Projects",
					"Hello world": "Hello world",
					"Front end Developer": "Front end Developer",
					Knowledge: "Knowledge",
					Tools: "Tools",
					Languages: "Languages",
					"Fluent Portuguese": "Fluent Portuguese",
					"Advanced English": "Advanced English",
				},
			},
			pt: {
				translations: {
					Contact: "Contato",
					"How to find me": "Como me encontrar",
					Education: "Formação",
					"Analysis and Systems Development": "Análise e Desenvolvimento de Sistemas",
					Projects: "Projetos",
					"Hello world": "Olá Mundo",
					"Front end Developer": "Desenvolvedor Front end",
					Knowledge: "Conhecimentos",
					Tools: "Ferramentas",
					Languages: "Idiomas",
					"Fluent Portuguese": "Português Fluente",
					"Advanced English": "Inglês Avançado",
				},
			},
		},
		fallbackLng: "en",
		ns: ["translations"],
		defaultNS: "translations",
		keySeparator: false,
		interpolation: {
			escapeValue: false,
			formatSeparator: ",",
		},
		react: {
			wait: true,
		},
	});
export default i18n;
