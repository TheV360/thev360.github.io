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

	function scrollUpdate() {
		hero.style.backgroundPositionY = (window.scrollY * .3).toFixed(2) + "px";
		
		if (window.scrollY >= window.innerHeight / 4) {
			header.classList.remove("heroic")
		} else {
			header.classList.add("heroic")
		}
		
		window.requestAnimationFrame(scrollUpdate);
	}
	
	scrollUpdate();
	
	// I'm sorry
	var headerHeightInPixels = parseInt(getRootStyle("--header-height")) * parseInt(getRootStyle("font-size"));
	
	projectsButton.addEventListener("click", (e)=>{
		window.scrollTo({
			top: firstProject.offsetTop - headerHeightInPixels,
			left: window.scrollX,
			behavior: "smooth"
		});
	});
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
