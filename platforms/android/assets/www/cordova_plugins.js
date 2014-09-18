cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.jshybugger.cordova/www/jsHybuggerLoader.js",
        "id": "org.jshybugger.cordova.jsHybuggerLoader",
        "runs": true
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "clobbers": [
            "plugin.notification.local"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.jshybugger.cordova": "4.5.6",
    "de.appplant.cordova.plugin.local-notification": "0.8.0dev",
    "org.apache.cordova.device": "0.2.13-dev"
}
// BOTTOM OF METADATA
});