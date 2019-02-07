import {CurrentLanguage} from "../both/controllers/app";
import { Meteor } from 'meteor/meteor';


if (Meteor.isClient) {
    Meteor.startup(function () {

        Session.set("showLoadingIndicator", true);

        TAPi18n.setLanguage(CurrentLanguage.get())
            .done(function () {
                // Session.set("showLoadingIndicator", false);
            })
            .fail(function (error_message) {
                // Handle the situation
                console.log(error_message);
            });
    });
}