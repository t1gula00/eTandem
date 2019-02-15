import {LanguageItemsSchema} from "../schemas/languageItems";

class LanguageItemsCollection extends Mongo.Collection {
    insert(item, callback) {
        item.createdAt = moment().toDate();
        // Call the original `insert` method, which will validate
        // against the schema
        return super.insert(item, callback);
    }
}

export const LanguageItems = new LanguageItemsCollection('languageItems');

LanguageItems.helpers({});

LanguageItems.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});

LanguageItems.attachSchema(LanguageItemsSchema);

