// Google Search on My Yahoo
// version 0.2
// 2013-10-22
// Copyright (c) 2005, Joe Grossberg
// Copyright (c) 2013, Jeremy C. Andrus
// under Creative Commons SA 1.0
// http://creativecommons.org/licenses/sa/1.0/
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Access Bar", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Google Search on My Yahoo
// @version       0.2
// @namespace     https://raw.github.com/afrojer/googleyahoo/master/google_on_yahoo.js
// @description   use Google's search on the My Yahoo page
// @match         https://my.yahoo.com*
// @grant         none
// @copyright     2005 Joe Grossberg, 2013+ Jeremy C. Andrus
// ==/UserScript==

function fixSearchBox() {
    var searchform = document.getElementById('UHSearch');
    searchform.onsubmit = 'void(null)';
    searchform.action = 'http://www.google.com/search?hl=en&btnG=Google+Search';
    var searchinput = document.getElementById('UHSearchBox');
    searchinput.name = 'q';
    var subinput = document.getElementById('UHSearchProperty');
    subinput.value = 'Google Search';
    var subinputbtn = document.getElementById('UHSearchWeb');
    subinputbtn.value = 'Google Search';
}

(function() {
    document.addEventListener('load', fixSearchBox, false);
    document.addEventListener('DOMSubtreeModified', fixSearchBox, false);
})();
