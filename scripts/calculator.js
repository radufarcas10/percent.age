/*****************************************************************************
   *
   * Register Service Worker
   *
   ****************************************************************************/

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
				   .register('./service-worker.js')
				   .then(function() { console.log('[ServiceWorker] Registered'); });
}

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
	document.getElementById('isWhatPercentOf').addEventListener('click', function() {
		calcIsWhatPercentOf();
	});
	document.getElementById('isPercentOfWhat').addEventListener('click', function() {
		calcIsPercentOfWhat();
	});
}

/*****************************************************************************
   *
   * Function that calculates what is x% of y (first form)
   *
   ****************************************************************************/

function calcWhatIsPercentOf() {
	let a = document.forms.whatIsPercentOf.a.value/100,
		b = a*document.forms.whatIsPercentOf.b.value,
		result = document.getElementById('result-one');

		if (!a || !b) return;

	result.innerText = b;
}

/*****************************************************************************
   *
   * Function that calculates x% of y = ? (second form)
   *
   ****************************************************************************/

function calcIsWhatPercentOf() {
	let a = document.forms.isWhatPercentOf.c.value,
		b = document.forms.isWhatPercentOf.d.value,
		c = a/b,
		d = c*100,
		result = document.getElementById('result-two');

	if (!a || !b) return;

	result.innerText = d;
}

function calcIsPercentOfWhat() {
	let a = document.forms.isPercentOfWhat.e.value,
		b = document.forms.isPercentOfWhat.f.value/100,
		c = a/b,
		result = document.getElementById('result-three');

		if (!a || !b) return;

	result.innerText = c;
}