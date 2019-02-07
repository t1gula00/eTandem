import {MatchMakeItems} from "../../both/collections/matchMakeItems";

Meteor.methods({
  'MatchMakeItems.insert': function (params) {
    MatchMakeItems.insert(params);
  }
});
