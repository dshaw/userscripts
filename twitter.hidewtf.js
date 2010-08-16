// ==UserScript==
// @name           Hide Who to follow
// @namespace      http://dshaw.com
// @description    Hide the Who to follow section on Twitter
// @include        http://twitter.com/*
// ==/UserScript==


var wtf = document.getElementById("recommended_users");

if (wtf) wtf.style.display = "none";