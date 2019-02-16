import {LANG_ITEM_LEVEL, LANG_ITEM_TYPE} from "../../imports/enums/enum";
import {getLanguageCodes, getLanguageNames} from "../../imports/data/teaching_languages";

export const LanguageItemsSchema = new SimpleSchema({
    langCode: {label: "LanguageCode", type: String, max: 3, allowedValues: getLanguageCodes(), defaultValue: null, optional: false},
    langName: {label: "LanguageName", type: String, allowedValues: getLanguageNames(), defaultValue: null, optional: false},
    type: {label: "LanguageItemType", type: String, allowedValues: LANG_ITEM_TYPE.values(), defaultValue: null, optional: false},
    level: {label: "LanguageLevel", type: String, max: 2, allowedValues: LANG_ITEM_LEVEL.values(), defaultValue: null, optional: false}
});