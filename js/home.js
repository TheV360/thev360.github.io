var eggCodes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var eggProgress = 0;

document.addEventListener('keydown', (e)=>{
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
	const eggCredits = [
		"Ooh! The Konami Code! I'll use this space to shoutout everyone I need to.",
		"Shoutouts to the Petit Computer and SmileBASIC community, you guys are cool! Also, shoutouts to my family for always supporting my love of programming, even when it impacted my grades! Finally, shoutouts to BrianXP7, for making a Minecraft house with a room for me a while ago. Sadly, it's long been deleted, but I still appreciate it."
	];
	
	var eggSelector = document.querySelectorAll("p");
	
	for (var i = 0; i < Math.min(eggSelector.length, eggCredits.length); i++) {
		eggSelector[i].innerHTML = eggCredits[i];
	}
}
