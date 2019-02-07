import {MatchMakeItems} from "../../both/collections/matchMakeItems";

MatchMakeItems.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId;
  },
  'remove': function(userId, doc) {
    return userId;
  }
});
