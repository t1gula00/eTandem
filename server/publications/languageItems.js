import {LanguageItems} from "../../both/collections/languageItems";

Meteor.publishComposite("languageItems", function() {
  return {
    find: function() {
      return LanguageItems.find({});
    }
  }
});
