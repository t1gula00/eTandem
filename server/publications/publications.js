import {LanguageItems} from "../../both/collections/languageItems";
import {MatchMakeItems} from "../../both/collections/matchMakeItems";
import {UserProfiles} from "../../both/collections/userProfiles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     Language Items
Meteor.publish("languageItems", function () {
    return LanguageItems.find({});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     Matchmake Items
Meteor.publish("matchMakeItems", function() {
    return MatchMakeItems.find({});
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     User Profiles
// Meteor.publish("userProfiles", function() {
//     return UserProfiles.find({});
// });

Meteor.publish('userProfile', function () {
    if (this.userId) {
        return UserProfiles.find({userId: this.userId});
    } else {
        this.ready();
    }
});
