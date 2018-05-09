var typing, check;

window.onload = function() {
	typing = document.getElementById("typing");
	
	if (typing) {
		check = document.createElement("div");
		
		document.onkeypress = function(e) {
			var key = String.fromCharCode(e.charCode);
			var text = typing.innerHTML;

			// Make breaks into newlines
			text = text.replace(/<br[^<>]*>/gim, "\n");

			// Remove entities
			check.innerHTML = text;
			text = check.textContent;

			// Add the key you pressed (finally)
			if (/^[\u0020-\u007e\u00a0-\u00ff]*$/.test(key)) {
				text = text + key;
			} else if (e.keyCode == 8 && text.length > 0) {
				text = text.substring(0, text.length - 1);
			} else if (e.keyCode == 10 || e.keyCode == 13) {
				text = text + "\n";
			}
			e.preventDefault();

			// Make newlines into breaks
			text = text.replace(/\n|\r/gim, "<br />");

			// Good
			typing.innerHTML = text;
		}
	}
}