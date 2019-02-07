import {MatchMakeItems} from "../collections/matchMakeItems";

DashboardController = AppController.extend({
    waitOn: function() {
        return this.subscribe('matchMakeItems');
    },
    data: {
        items: MatchMakeItems.find({})
    },
    onAfterAction: function () {
    }
});

DashboardController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});

DashboardController.helpers({
});

