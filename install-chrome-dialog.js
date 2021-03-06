
(function() {
"use strict";

    window.installChrome = function() {
        var html = '<div id="install-chrome-dialog" style="position: fixed; top: 30%; left: 20%; right: 20%; background-color: #D4EBFF; ' +
        'border: 1px solid #A5B9CB; padding: 40px; font-family: sans-serif; font-size: 20px; text-align: center;">' +
        '<p>The web browser you are using is too old to display this web site properly. ' +
        'We recommend you to install Google Chrome instead.</p>' +
        '<p><a href="https://www.google.com/chrome/">Click here to go on the Google Chrome web site and download it.</a></p>' +
        '<a id="install-chrome-close-btn" style="position: absolute; top: 15px; right: 15px;" href="javascript:void(0)">Close</a>' +
        '</div>';
        document.getElementsByTagName("body")[0].innerHTML += html;
        document.getElementById("install-chrome-close-btn").onclick = function() {
            var el = document.getElementById('install-chrome-dialog');
            el.parentNode.removeChild(el);
        };
    };

})();