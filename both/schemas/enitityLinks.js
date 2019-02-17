import {MatchMakeItems} from "../collections/matchMakeItems";
import {LanguageItems} from "../collections/languageItems";
import {UserProfiles} from "../collections/userProfiles";

// UserProfiles.addLinks({
//     user: {
//         type: 'one',
//         field: 'userId',
//         collection: Meteor.users
//     }
// });



MatchMakeItems.addLinks({
    teacher: {
        type: 'one',
        field: 'teacherId',
        collection: Meteor.users
    },
    student: {
        type: 'one',
        field: 'studentId',
        collection: Meteor.users
    }
});

LanguageItems.addLinks({
    user: {
        type: 'one',
        field: 'userId',
        collection: Meteor.users,
    },
});

Meteor.users.addLinks({
    // profile : {
    //     collection: UserProfiles,
    //     inversedBy: 'user'
    // },
    learningMatches: {
        collection: MatchMakeItems,
        inversedBy: 'student'
    },
    teachingMatches: {
        collection: MatchMakeItems,
        inversedBy: 'teacher'
    },
    learningItems: {
        collection: LanguageItems,
        inversedBy: 'user' // This represents the name of the link we defined in Todos
    },
    teachingItems: {
        collection: LanguageItems,
        inversedBy: 'user' // This represents the name of the link we defined in Todos
    }
});