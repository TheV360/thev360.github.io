var eggCodes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var eggProgress = 0;

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
		if (window.scrollY >= window.innerHeight / 4) {
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
	});
	
	window.addEventListener("scroll", (e)=>{
		if (!enough) {
			window.requestAnimationFrame(setHeader);
			enough = true;
		}
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
