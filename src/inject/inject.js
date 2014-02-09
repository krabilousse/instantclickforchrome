var s = document.createElement('script');
s.src = chrome.extension.getURL('js/instantclick.min.js');

var start = document.createElement('script');
var t = document.createTextNode("InstantClick.init(true);");

s.onload = function() {
    this.parentNode.removeChild(this);
    start.appendChild(t);
};


(document.head||document.documentElement).appendChild(s);
(document.head||document.documentElement).appendChild(start);
