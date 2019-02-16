import {Meteor} from 'meteor/meteor';
import { i18n } from 'meteor/universe:i18n';
import { Session } from 'meteor/session';

if (Meteor.isClient) {
    Meteor.startup(function () {
        initLanguages();
    });
}

function initLanguages () {
    // Get supported languages code from settings.json
    const langs = Meteor.settings.public.meta.languages;

    // Load languages
    langs.forEach(function (lang) {
        i18n.loadLocale(lang.code);
        i18n.loadLocale(lang.code);
    });

    // If last session language variable is set use it, otherwise persist language from getLang()
    if (Session.get("clientLang") != null){
        i18n.setLocale(Session.get("clientLang"));
    }
    else {
        Session.setPersistent("clientLang", getLang());
        i18n.setLocale(getLang());
    }
}

function getLang () {
    return (
        // navigator.languages && navigator.languages[0] ||
        // navigator.language ||
        // navigator.browserLanguage ||
        Meteor.settings.public.meta.lang ||
        "en-US"
    );
}