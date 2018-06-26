"use strict";

var i;
var togglenav, nav, navitems;

// Once page loads completely...
window.addEventListener("DOMContentLoaded", ()=>{
	// Remove whitespace tags
	clean(document.body);
	
	if (document.getElementById("header-nav")) {
		togglenav = document.getElementById("toggle-nav");
		nav = document.getElementById("header-nav");
		
		// Get list of nodes in nav (have to first get throught the <ul> tag)
		navitems = nav.childNodes[0].childNodes;
		
		// Hamburger button toggles class
		togglenav.addEventListener("click", ()=>{
			nav.classList.toggle("show-nav");
		});
		
		// Unlink the page you're on
		for (i = 0; i < navitems.length; i++) {
			if (document.location.href == navitems[i].childNodes[0].href || document.location.pathname == navitems[i].childNodes[0].href) {
				// navitems[i].innerHTML = navitems[i].childNodes[0].innerHTML;
				navitems[i].classList.add("here");
			}
		}
	}
});

// Honestly, at this point it's my code.
function clean(node) {
	for (var n = 0; n < node.childNodes.length; n++) {
		var child = node.childNodes[n];
		
		if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
			node.removeChild(child);
			n--;
		} else if (child.nodeType === 1 && !/pre|code|blockquote/i.test(child.tagName)) {
			clean(child);
		}
	}
}
