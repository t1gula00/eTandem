import {MatchMakeItems} from "../../both/collections/matchMakeItems";

Meteor.publishComposite("matchMakeItems", function() {
  return {
    find: function() {
      return MatchMakeItems.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
