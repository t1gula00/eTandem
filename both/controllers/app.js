import {TAPi18n} from 'meteor/tap:i18n';

export const CurrentLanguage = new ReactiveVar(Meteor.settings.public.meta.lang);

AppController = RouteController.extend({
    layoutTemplate: 'generalLayout',
    waitOn: function() {
        // return this.subscribe('items');
    },
    onAfterAction: function () {
    },
});

AppController.events({
    'click [data-action=logout]': function () {
        AccountsTemplates.logout();
    },
    'click [data-action=langswitch]': function (event) {
        let lang = 'undefined';
        let $element = $(event.target);
        lang = $element.data("lang");
        CurrentLanguage.set(lang);
        TAPi18n.setLanguage(CurrentLanguage.get())
    }
});

AppController.helpers({
    appTitle: Meteor.settings.public.meta.title,
    languages: Meteor.settings.public.meta.languages,
});

