AppController = RouteController.extend({
    layoutTemplate: 'generalLayout',
    waitOn: function() {

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

