// Google Search on My Yahoo
// version 0.3
// 2013-10-23
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
// @version       0.3
// @namespace     https://raw.github.com/afrojer/googleyahoo/master/google_on_yahoo.js
// @description   Use Google's search on the My Yahoo page
// @match         https://my.yahoo.com*
// @grant         none
// @copyright     2005 Joe Grossberg, 2013+ Jeremy C. Andrus
// ==/UserScript==

// HTML5™, baby! http://mathiasbynens.be/notes/document-head
document.head || (document.head = document.getElementsByTagName('head')[0]);

function removeFavIcon() {
    var links = document.head.getElementsByTagName("link");
    for (var i=0; i<links.length; i++) {
        var link = links[i];
        //if (link.type=="image/x-icon" && link.rel=="shortcut icon") {
        if (link.rel=="shortcut icon") {
            document.head.removeChild(link);
            return; // Assuming only one match at most.
        }
    }
}

function changeFavicon(src) {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = src;
    removeFavIcon();
    document.head.appendChild(link);
}

function fixSearchBox() {
    var searchform = document.getElementById('UHSearch');
    searchform.onsubmit = 'void(null)';
    searchform.action = 'https://www.google.com/search?hl=en&btnG=Google+Search';
    var searchinput = document.getElementById('UHSearchBox');
    searchinput.name = 'q';
    var subinput = document.getElementById('UHSearchProperty');
    subinput.value = 'Google Search';
    var subinputbtn = document.getElementById('UHSearchWeb');
    subinputbtn.value = 'Google Search';

    // set the document title
    document.title = 'Home';

    // remove the goofy Yahoo! animation
    var animlogo = document.getElementById('yucs-logo-ani');
    var animlnk = document.getElementById('yucs-link-ani');
    var animspan = document.getElementById('animator');
    animspan.id = 'XX-animator';
    animlogo.id = 'XX-logo';
    animlogo.text = 'My Home';
    animlogo.setAttribute('style', "background-image: url('http://jeremya.com/files/images/transformers_logo.png') !important;");
    animlnk.id = 'XX-link';
    animlnk.innerHTML = "";

    // favicon!
    changeFavicon('http://jeremya.com/files/2011/05/favicon.ico');
}

(function() {
    document.addEventListener('load', fixSearchBox, false);
    document.addEventListener('DOMSubtreeModified', fixSearchBox, false);
})();
