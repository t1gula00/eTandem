import {MatchMakeItems} from "../collections/matchMakeItems";
import {LanguageItems} from "../collections/languageItems";

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