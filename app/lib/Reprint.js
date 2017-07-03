var Reprint = require('com.github.ajalt.reprint.core.Reprint'),
    AuthenticationListener = require('com.github.ajalt.reprint.core.AuthenticationListener'),
    Activity = require('android.app.Activity');

exports.initialize = function() {
    Reprint.initialize(new Activity(Ti.Android.currentActivity));
};

exports.authenticate = function(successCallback, failureCallback) {
    Reprint.authenticate(new AuthenticationListener({
        onSuccess: successCallback,
        onFailure: failureCallback
    }));
};

exports.isHardwarePresent = function() { return Reprint.isHardwarePresent(); };
exports.hasFingerprintRegistered = function() { return Reprint.hasFingerprintRegistered(); };
exports.cancelAuthentication = function() { return Reprint.cancelAuthentication(); };