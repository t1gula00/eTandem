import {UserProfileSchema} from "../schemas/userProfiles";

class UserProfilesCollection extends Mongo.Collection {
    insert(item, callback) {
        // Call the original `insert` method, which will validate
        // against the schema
        return super.insert(item, callback);
    }
}

export const UserProfiles = new UserProfilesCollection('userProfiles');

UserProfiles.helpers({});

UserProfiles.before.insert(function (userId, doc) {
    // doc.createdAt = moment().toDate();
});

UserProfiles.attachSchema(UserProfileSchema);

