if ('serviceWorker' in navigator) {
	navigator.serviceWorker
				   .register('./service-worker.js')
				   .then(reg => {
              if (reg.installing) {
                console.log('[ServiceWorker] Installing');
              } else if (reg.waiting) {
                console.log('[ServiceWorker] Installed');
              } else if (reg.active) {
                console.log('[ServiceWorker] Active');
              }
           });
}

setEventHandlers = () => {
  document.getElementById('whatIsPercentOf').addEventListener('click', () => {
    calcWhatIsPercentOf();
  });
  document.getElementById('isWhatPercentOf').addEventListener('click', () => {
    calcIsWhatPercentOf();
  });
  document.getElementById('isPercentOfWhat').addEventListener('click', () => {
    calcIsPercentOfWhat();
  });
}

setEventHandlers();

calcWhatIsPercentOf = () => {
	let a = document.forms.whatIsPercentOf.a.value/100,
		  b = a*document.forms.whatIsPercentOf.b.value,
		  result = document.getElementById('result-one');

	if (!a || !b) return;

	result.innerText = (b % 2 === 0) ? b : b.toFixed(2);
}

calcIsWhatPercentOf = () => {
	let a = document.forms.isWhatPercentOf.c.value,
		  b = document.forms.isWhatPercentOf.d.value,
		  c = a/b,
		  d = c*100,
		  result = document.getElementById('result-two');

	if (!a || !b) return;

	result.innerText = (d % 2 === 0) ? d + '%' : d.toFixed(2) + '%';
}

calcIsPercentOfWhat = () => {
	let a = document.forms.isPercentOfWhat.e.value,
		  b = document.forms.isPercentOfWhat.f.value/100,
		  c = a/b,
		  result = document.getElementById('result-three');

	if (!a || !b) return;

	result.innerText = (c % 2 === 0) ? c : c.toFixed(2);
}
