const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	// Check needed because the propertyName is inconsistent across browsers.
	// See comment in the CSS rule for .panel 
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));