import {LanguageItems} from "../../both/collections/languageItems";
import {MatchMakeItems} from "../../both/collections/matchMakeItems";
import {UserProfiles} from "../../both/collections/userProfiles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     Language Items
LanguageItems.allow({
    'insert': function(userId, doc) {
        return true;
    },
    'update': function(userId, doc, fields, modifier) {
        return true;
    },
    'remove': function(userId, doc) {
        return true;
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     MathMake Items
MatchMakeItems.allow({
    'insert': function(userId, doc) {
        return true;
    },
    'update': function(userId, doc, fields, modifier) {
        return true;
    },
    'remove': function(userId, doc) {
        return true;
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     UserProfiles
UserProfiles.allow({
    'insert': function(userId, doc) {
        return true;
    },
    'update': function(userId, doc, fields, modifier) {
        return true;
    },
    // 'remove': function(userId, doc) {
    //     return userId;
    // }
});
