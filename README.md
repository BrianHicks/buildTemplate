buildTemplate
=============

Intro
-----

This is a small JS to take a template and return HTML (or whatever you like).

Usage
-----

	templateLi = "<li style='{%style%}'>{%content%}</li>";
	templateOptions = {
		"style": "li-style",
		"content": "Git rocks my socks."
	}
	buildTemplate(templateLi, templateOptions);

outputs

	<li style='li-style'>Git rocks my socks.</li>