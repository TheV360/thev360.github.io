// var eggCodes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// var eggProgress = 0;

function getRootStyle(str) {
	return getComputedStyle(document.documentElement).getPropertyValue(str);
}

document.addEventListener("DOMContentLoaded", (e)=>{
	var enough = false;
	
	var header = document.querySelector("header");
	var projectsButton = document.getElementById("projectsButton");
	var firstProject = document.querySelector(".showcase");
	
	// I'm sorry
	var headerHeightInPixels = parseInt(getRootStyle("--header-height")) * parseInt(getRootStyle("font-size"));
	
	function setHeader() {
		if (window.scrollY >= 16) {
			header.classList.remove("heroic")
		} else {
			header.classList.add("heroic")
		}
		
		enough = false;
	}
	
	setHeader();
	
	projectsButton.addEventListener("click", (e)=>{
		window.scrollTo({
			top: firstProject.offsetTop - headerHeightInPixels,
			left: window.scrollX,
			behavior: "smooth"
		});
		header.classList.remove("heroic");
	});
	
	window.addEventListener("scroll", (e)=>{
		if (!enough) {
			window.requestAnimationFrame(setHeader);
			enough = true;
		}
	});
});

// document.addEventListener("keydown", (e)=>{
// 	if (e.keyCode == eggCodes[eggProgress]) {
// 		eggProgress++;
// 		if (eggProgress == eggCodes.length) {
// 			eggFunction();
// 			eggProgress = 0;
// 		}
// 	} else {
// 		eggProgress = 0;
// 	}
// });

// function eggFunction() {
// 	const eggCredits = [
// 		"Ooh! The Konami Code! I'll use this space to shoutout everyone I need to.",
// 		"Shoutouts to the Petit Computer and SmileBASIC community, you guys are cool! Also, shoutouts to my family for always supporting my love of programming, even when it impacted my grades! Finally, shoutouts to BrianXP7, for making a Minecraft house with a room for me a while ago. Sadly, it's long been deleted, but I still appreciate it."
// 	];
	
// 	var eggContainer = document.createElement("div");
// 	eggContainer.classList.add("container");
	
// 	for (var i = 0; i < eggCredits.length; i++) {
		
// 	}
	
// 	'<div class="container"></div>';
// }
