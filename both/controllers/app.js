AppController = RouteController.extend({
    layoutTemplate: 'generalLayout',
    waitOn: function() {
        this.subscribe('userProfile');
        this.subscribe('matchMakeItems');
        this.subscribe('languageItems');
    },
    onAfterAction: function () {
    },
});

AppController.events({
    'click [data-action=logout]': function () {
        AccountsTemplates.logout();
    },
});

AppController.helpers({
    appTitle: Meteor.settings.public.meta.title,
});

