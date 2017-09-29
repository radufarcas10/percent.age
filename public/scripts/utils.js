export default registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
					   .register('./service-worker.js')
					   .then(function() { console.log('[ServiceWorker] Registered'); });
	}
}
