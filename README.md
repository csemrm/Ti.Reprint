# Ti.Reprint - Fingerprint Recognition

This HyperLoop module allows you to implement fingerprint recognition in your Android app.

This module was originally posted on LoopModules: https://loopmodules.com/downloads/ti-reprint-fingerprint-recognition/

![alt text](https://i2.wp.com/loopmodules.com/wp-content/uploads/edd/2017/01/2017-01-13-10_13_09.gif?resize=292%2C519&ssl=1)

# Usage
  1 – First of all, start by declaring the USE_FINGERPRINT permission in your Android manifest file.

```javascript
<uses-permission android:name="android.permission.USE_FINGERPRINT"/>
```
  2 – Require the module and initialize it with the method “initialize”:

```javascript
var Reprint = require('Reprint');
Reprint.initialize();
```
  3 – Call the “authenticate” method to create a temporary listener for fingerprint recognition. Note that this won’t display anything on your screen, so you still need to show an alert / text on your screen indicating to the user that he needs to scan his fingerprint.

Also, make sure to check if the user’s device has a fingerprint reader AND if the user has any registered fingerprints!

```javascript
if (!Reprint.isHardwarePresent()) {
  alert('Your device does not support fingerprint recognition.');
  return;
}

if (!Reprint.hasFingerprintRegistered()) {
  alert('You do not have any fingerprint registered in this device.');
  return;
}

function successCallback(moduleTag) {
  alert('Fingerprint recognised!');
}

function failureCallback(failureReason, fatal, errorMessage, moduleTag, errorCode) {
  Reprint.cancelAuthentication()

  alert(errorMessage);
}

Reprint.authenticate(successCallback, failureCallback);
```
