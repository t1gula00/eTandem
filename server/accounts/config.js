import {Accounts} from 'meteor/accounts-base'
import {UserProfiles} from "../../both/collections/userProfiles";

Accounts.onCreateUser((options, user) => {
    if (options.profile) {
        throw new Meteor.Error('bad-thing', 'Tried to assign predefined profile.');
    }

    //Warning asynch method
    // Meteor.call('UserProfiles.insert',
    //     ,
    //     function (error, createdProfileId) {
    //         if (error) {
    //             // Output error if subscription fails
    //             console.log(error.reason);
    //         } else {
    //             // Success
    //
    //         }
    //     });
    user.profile = UserProfiles.insert({
        userId: user._id
    });

    return user;
});