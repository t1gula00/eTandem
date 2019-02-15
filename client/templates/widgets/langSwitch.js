import i18n from 'meteor/universe:i18n';
import {Session} from 'meteor/session';

// Bind language file namespace to this widget
Template.langSwitch.bindI18nNamespace('LangSwitch');

Template.langSwitch.helpers({
    languages() {
        let res = [];
        const langs = Meteor.settings.public.meta.languages;

        langs.forEach(function (lang) {
            res.push(
                {
                    code: lang.code,
                    name: lang.name
                }
            );
        });
        return res;
    },
});

Template.langSwitch.events({
    'click [data-switch-language]'(e) {
        e.preventDefault();
        i18n.setLocale(e.currentTarget.dataset.switchLanguage);
        return false;
    }
});

i18n.onChangeLocale(function (newLocale) {
    Session.setPersistent("clientLang", newLocale);
});