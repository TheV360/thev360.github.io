var eggCodes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var eggProgress = 0;

function getRootStyle(str) {
	return getComputedStyle(document.documentElement).getPropertyValue(str);
}

document.addEventListener("DOMContentLoaded", (e)=>{
	var header = document.querySelector("header");
	var hero = document.getElementById("superhero");
	var projectsButton = document.getElementById("projectsButton");
	var firstProject = document.querySelector(".showcase");
	
	// I'm sorry
	var headerHeightInPixels = parseInt(getRootStyle("--header-height")) * parseInt(getRootStyle("font-size"));
	
	projectsButton.addEventListener("click", (e)=>{
		window.scrollTo({
			top: firstProject.offsetTop - headerHeightInPixels,
			left: window.scrollX,
			behavior: "smooth"
		});
	});
	
	function parallaxUpdate() {
		if (window.scrollY <= window.innerHeight) {
			hero.style.backgroundPositionY = Math.floor(window.scrollY * .3) + "px";
			//hero.style.transform = "translateY(" + Math.floor(window.scrollY * .3) + "px)";
		}
		
		window.requestAnimationFrame(parallaxUpdate);
	}
	
	function headerUpdate() {
		if (window.scrollY >= Math.floor(window.innerHeight / 4)) {
			header.classList.remove("heroic");
		} else {
			header.classList.add("heroic");
		}
		
		window.requestAnimationFrame(headerUpdate);
	}
	
	if (!/Mobi|Android/i.test(navigator.userAgent)) {
		parallaxUpdate();
	}
	headerUpdate();
});

document.addEventListener("keydown", (e)=>{
	if (e.keyCode == eggCodes[eggProgress]) {
		eggProgress++;
		if (eggProgress == eggCodes.length) {
			eggFunction();
			eggProgress = 0;
		}
	} else {
		eggProgress = 0;
	}
});

function eggFunction() {
	alert("TODO: add something neat");
}
