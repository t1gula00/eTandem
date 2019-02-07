import {MatchMakeItemsSchema} from "../schemas/matchMakeItems";

class MatchMakeItemsCollection extends Mongo.Collection {
    insert(item, callback) {
        item.createdAt = moment().toDate();
        // Call the original `insert` method, which will validate
        // against the schema
        return super.insert(item, callback);
    }
}

export const MatchMakeItems = new MatchMakeItemsCollection('matchMakeItems');

MatchMakeItems.helpers({});

MatchMakeItems.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});

MatchMakeItems.attachSchema(MatchMakeItemsSchema);

