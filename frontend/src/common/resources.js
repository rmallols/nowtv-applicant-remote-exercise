var less;
(function () {
    'use strict';

    function getScript(url) {
        document.write('<script type="text/javascript" src="' + url + '"></script>');
    }

    function getStyleSheet(url) {
        var fileExtension = url.split('.').pop(), rel = (fileExtension === 'less') ? '/less' : '';
        document.write('<link type="text/css" href="' + url + '" rel="stylesheet' + rel + '" />');
    }

    var srcPath = '../../src', vendorPath = '../../vendor/';

    //External libraries
    getScript(vendorPath + '/jQuery/jquery.min.js');
    getScript(vendorPath + '/angularJs/angular.min.js');
    getScript(vendorPath + '/angularJs/angular-ui-router.min.js');

    //Common src resources
    getScript(srcPath + '/common/app.js');
    getStyleSheet(srcPath + '/common/main.less');

    //Business logic src resources
    //Register
    getScript(srcPath + '/app/register/RegisterCtrl.js');
    //Details
    getScript(srcPath + '/app/thanks/ThanksCtrl.js');

    //Less vendor library (has to be loaded at the end of the stylesheet chain
    less = { env: "production" }; //Set production environment to avoid log messages
    getScript(vendorPath + '/less/less.min.js');
})();