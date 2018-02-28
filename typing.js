var typing, check;

window.onload = function() {
	typing = document.getElementById("typing");
	check = document.createElement("div");
	
	document.onkeypress = function(e) {
		var key = String.fromCharCode(e.charCode);
		var text = typing.innerHTML;
		
		typing.style.wordWrap = "break-word";
		
		// Make breaks into newlines
		text = text.replace(/<br[^<>]*>/gim, "\n");
		
		// Remove Javascript tags with this mess - stackoverflow.com/a/18052486
		text = text.replace(/<script(?:(?!\/\/)(?!\/\*)[^'"]|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/.*(?:\n)|\/\*(?:(?:.|\s))*?\*\/)*?<\/script>/gim, "\n");
		
		// Remove entities
		check.innerHTML = text;
		text = check.textContent;
		
		// Add the key you pressed (finally)
		if (/^[\u0020-\u007e\u00a0-\u00ff]*$/.test(key)) {
			text = text + key;
		} else if (e.keyCode == 8 && typing.innerHTML.length > 0) {
			typing.innerHTML = text.substring(0, typing.innerHTML.length - 1);
		} else if (e.keyCode == 10 || e.keyCode == 13) {
			typing.innerHTML = text + "\n";
		}
		e.preventDefault();
		
		// Make newlines into breaks
		text = text.replace(/\n|\r/gim, "<br />");
		
		// Good
		typing.innerHTML = text;
	}
}
