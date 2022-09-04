import i18next from "i18next";
import {initReactI18next} from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: require("./en.json"),
        },
        es: {
            translation: require("./es.json"),
        },
        fr: {
            translation: require("./fr.json"),
        }
    },
    lng: "es",
})

export default i18next;