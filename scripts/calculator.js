/*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

setEventHandlers();

function setEventHandlers() {
	document.getElementById('whatIsPercentOf').addEventListener('click', function() {
		calcWhatIsPercentOf();
	});
	document.getElementById('isPercentOf').addEventListener('click', function() {
		calcIsPercentOf();
	});
	document.getElementById('isWhatPercent').addEventListener('click', function() {
		calcIsWhatPercent();
	});
}

function calcWhatIsPercentOf() {
	var a = document.forms.whatIsPercentOf.a.value/100,
		b = a*document.forms.whatIsPercentOf.b.value,
		result = document.getElementById('result-one');

	result.innerText = b;
}

function calcIsPercentOf() {
	var a = document.forms.isPercentOf.c.value,
		b = document.forms.isPercentOf.d.value,
		c = a/b,
		d = c*100,
		result = document.getElementById('result-two');

	result.innerText = d;
}