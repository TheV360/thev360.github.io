"use strict";

// Once page loads completely...
window.addEventListener("DOMContentLoaded", ()=>{
	var i;
	var header, togglenav, nav, navitems;
	var footernote;
	
	const footernotes = [
		"Sincerely, a Minecraft fan.",
		"Thank.",
		"What's happening, fellow gamers?",
		"This is a randomly chosen footer note.",
		"This isn't a placeholder!",
		"Probably not actually copyrighted.",
		"Meta joke here.",
		"REALLY GREAT RPG 2 coming soon! I swear!",
		"Having existential crises since 2013!",
		"undefined", // Will replace this with some vaguely anti-capitalist garbage soon
		"Some ferns are green, I'm in a mech,", // TODO: fix this rhyme.
		"Now contains 100% less JQuery!" // Just wanted to do a jab at JQuery, it's an alright library, but it's pretty bloated...
	];
	
	// Remove whitespace tags
	clean(document.body);
	
	if (document.getElementById("header-nav")) {
		header = document.querySelector("header");
		togglenav = document.getElementById("toggle-nav");
		nav = document.getElementById("header-nav");
		
		// Get list of nodes in nav (have to first get throught the <ul> tag)
		navitems = nav.childNodes[0].childNodes;
		
		// Underline the page you're on
		for (i = 0; i < navitems.length; i++) {
			if (navitems[i].childNodes[0].href == document.location.href) {
				navitems[i].childNodes[0].href = "javascript:void(0)";
				navitems[i].childNodes[0].addEventListener("click", ()=>{
					// Go to top on click
					window.scrollTo({
						top: 0,
						left: window.scrollX,
						behavior: "smooth"
					});
				});
				navitems[i].classList.add("here");
			}
		}
		
		// Hamburger button toggles class
		togglenav.addEventListener("click", (e)=>{
			header.classList.toggle("show-nav");
		});
	}
	
	if (document.getElementById("footer-note")) {
		footernote = document.getElementById("footer-note");
		
		footernote.innerHTML = footernotes[Math.floor(Math.random() * footernotes.length)];
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
