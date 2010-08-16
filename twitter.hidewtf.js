// ==UserScript==
// @name           Hide Who to follow
// @namespace      http://dshaw.com
// @description    Hide the Who to follow section on Twitter
// @include        http://twitter.com/*
// ==/UserScript==


document.getElementById("recommended_users").style.display = "none";
document.getElementById("profile").style.marginBottom = "1em";