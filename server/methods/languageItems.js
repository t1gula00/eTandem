import {LanguageItems} from "../../both/collections/languageItems";

Meteor.methods({
  'LanguageItems.insert': function (params) {
    LanguageItems.insert(params);
  }
});
