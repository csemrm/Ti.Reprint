var Reprint = require('Reprint'),
    dialog;

function doClick(e) {
    if (!Reprint.isHardwarePresent()) {
        alert('Your device does not support fingerprint recognition.');
        return;
    }

    if (!Reprint.hasFingerprintRegistered()) {
        alert('You do not have any fingerprint registered in this device.');
        return;
    }

    dialog.show();

    Reprint.authenticate(successCallback, failureCallback);
}

function successCallback(moduleTag) {
    dialog.hide();

    alert('Fingerprint recognised!');
}

function failureCallback(failureReason, fatal, errorMessage, moduleTag, errorCode) {
    dialog.hide();

    Reprint.cancelAuthentication()

    alert(errorMessage);
}

(function() {
    $.index.open();

    Reprint.initialize();

    dialog = Ti.UI.createAlertDialog({
        buttonNames: ['Cancel'],
        message: 'Scan your fingerprint now',
        title: 'Fingerprint'
    });

    dialog.addEventListener('click', function() {
        Reprint.cancelAuthentication();
    });
})();
