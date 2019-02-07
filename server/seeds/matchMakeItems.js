import {MatchMakeItems} from "../../both/collections/matchMakeItems";

Meteor.startup(function () {

    Factory.define('matchMakeItems', MatchMakeItems, {
        teacherId: function () {
            return Meteor.userId();
        }, studentId: function () {
            return Meteor.userId();
        },
        tempField: function () {
            return "Test";
        }
    });

    if (MatchMakeItems.find({}).count() === 0) {
        _(5).times(function (n) {
            Factory.create('matchMakeItems');
        });
    }
});
