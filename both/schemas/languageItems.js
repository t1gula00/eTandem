import {LANG_ITEM_TYPE} from "../enums/enum";

export const LanguageItemsSchema = new SimpleSchema({
    langCode: {label: "LanguageCode", type: String, max: 3, defaultValue: null, optional: false},
    langName: {label: "LanguageName", type: String, defaultValue: null, optional: false},
    type: {label: "LanguageItemType", type: String, defaultValue: null, optional: false},
    level: {label: "LanguageLevel", type: String, max: 2, defaultValue: null, optional: false}
});