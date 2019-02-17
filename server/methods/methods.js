import {LanguageItems} from "../../both/collections/languageItems";
import {MatchMakeItems} from "../../both/collections/matchMakeItems";
import {UserProfiles} from "../../both/collections/userProfiles";

// Meteor.methods({
//     'Meteor.users.insert': function (doc, callback) {
//         console.log('here');
//         return Meteor.users.insert(doc, callback);
//     }
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     Language Items
Meteor.methods({
    'LanguageItems.insert': function (params) {
        console.debug("Inserting into LanguageItems collection");
        return LanguageItems.insert(params);
    },
    'LanguageItems.remove': function (_id) {
        console.debug("Deleting from LanguageItems collection");
        return LanguageItems.remove(_id);
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     MatchMake Items
Meteor.methods({
    'MatchMakeItems.insert': function (params) {
        console.debug("Inserting into MatchMakeItems collection");
        MatchMakeItems.insert(params);
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     User Profiles
Meteor.methods({
    'UserProfiles.insert': function (params) {
        console.debug("Inserting into UserProfiles collection");

        //This should not happen, but in case
        if (UserProfiles.find({userId: Meteor.userId()}).count() === 1){
            throw new Meteor.Error('bad-thing', "User profile already existing for this user");
        }

        try {
            // Any security checks, such as logged-in user, validating data, etc.
            return UserProfiles.insert(params);
        } catch (error) {
            // error handling, just throw an error from here and handle it on client
            throw new Meteor.Error('bad-thing', error);
        }
    }
});

