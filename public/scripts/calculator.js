if ('serviceWorker' in navigator) {
	let isUpdate = false;
	navigator.serviceWorker
				   .register('./service-worker.js')
				   .then(reg => {
						if (reg.installing) {
							console.log('[ServiceWorker] Installing');
						} else if (reg.waiting) {
							console.log('[ServiceWorker] Installed');
						} else if (reg.active) {
							isUpdate = true;
							console.log(`[ServiceWorker] Active
							This app now works offline`);
							if (isUpdate) {
								console.log('There is an sw waiting to activate');
							} else {
								showToast();
							}
						}
					});
}

Vue.component('comp-item', {
	props: ['comp'],
	template: `
		<form name="whatIsPercentOf" autocomplete="off" onsubmit="return false">
			<fieldset>
				<div class="content">
					<label for="a">{{ comp.label1 }}</label>
					<input v-bind:value="value"
						v-on:input="$emit('input', $event.target.value)"
						v-model.number="valueA" type="number" name="a" required>
					<label for="b">{{ comp.label2 }}</label>
					<inputv-bind:value="value"
						v-on:input="$emit('input', $event.target.value)"
						v-model.number="valueB" type="number" name="b" required>
					<label>{{ comp.label3 }}</label>
				</div>
				<div class="content">
					<button v-on:click="comp.calculate" type="submit" id="whatIsPercentOf">Calculate %</button>
					<span v-model.number="result" id="result-one"></span>
				</div>
			</fieldset>
		</form>
	`
});

let app = new Vue({
	el: "#calc",
	data: {
		valueA: null,
		valueB: null,
		result: 0,
		texts: {
			pageTitle: "PERCENTAGE CALCULATOR",
			features: {
				offline: "WORKS OFFLINE",
				add: "ADD TO HOMESCREEN"
			}
		},
		comps: [
			{
				id: '1',
				label1: 'What is',
				label2: '% of',
				label3: '?',
				calculate() {
					if (!this.valueA || !this.valueB) {
						return;
					}
					console.log('cs', this.valueA, this.valueB);
					let valA = this.valueA / 100,
						valB = this.valueB;
					// result = document.getElementById('result-one');

					// if (!valA || !valB) return;

					this.result = (valB % 2 === 0) ? valB : valB.toFixed(2);
				}
			}
		]
	},
	methods: {
		calcWhatIsPercentOf() {
			if (!this.valueA || !this.valueB) {
				return;
			}
			console.log('cs', this.valueA, this.valueB);
			let valA = this.valueA / 100,
				valB = this.valueB;
		  // result = document.getElementById('result-one');

			// if (!valA || !valB) return;

			this.result = (valB % 2 === 0) ? valB : valB.toFixed(2);
		},
		calcIsWhatPercentOf() {
			let a = document.forms.isWhatPercentOf.c.value,
					b = document.forms.isWhatPercentOf.d.value,
					c = a/b,
					d = c*100,
					result = document.getElementById('result-two');

			if (!a || !b) return;

			result.innerText = (d % 2 === 0) ? d + '%' : d.toFixed(2) + '%';
		},
		calcIsPercentOfWhat() {
			let a = document.forms.isPercentOfWhat.e.value,
					b = document.forms.isPercentOfWhat.f.value/100,
					c = a/b,
					result = document.getElementById('result-three');

			if (!a || !b) return;

			result.innerText = (c % 2 === 0) ? c : c.toFixed(2);
		}
	}
});

// setEventHandlers = () => {
//   document.getElementById('whatIsPercentOf').addEventListener('click', () => {
//     calcWhatIsPercentOf();
//   });
//   document.getElementById('isWhatPercentOf').addEventListener('click', () => {
//     calcIsWhatPercentOf();
//   });
//   document.getElementById('isPercentOfWhat').addEventListener('click', () => {
//     calcIsPercentOfWhat();
//   });
// }

// setEventHandlers();

// showToast = () => {
// 	// Get the snackbar DIV
// 	const toast = document.getElementById("snackbar");
// 	// Add the "show" class to DIV
// 	toast.className = "show";

// 	// After 3 seconds, remove the show class from DIV
// 	setTimeout(function(){ toast.className = toast.className.replace("show", "hide"); }, 3000);
// }

// calcWhatIsPercentOf = () => {
// 	let a = document.forms.whatIsPercentOf.a.value/100,
// 		  b = a*document.forms.whatIsPercentOf.b.value,
// 		  result = document.getElementById('result-one');

// 	if (!a || !b) return;

// 	result.innerText = (b % 2 === 0) ? b : b.toFixed(2);
// }

// calcIsWhatPercentOf = () => {
// 	let a = document.forms.isWhatPercentOf.c.value,
// 		  b = document.forms.isWhatPercentOf.d.value,
// 		  c = a/b,
// 		  d = c*100,
// 		  result = document.getElementById('result-two');

// 	if (!a || !b) return;

// 	result.innerText = (d % 2 === 0) ? d + '%' : d.toFixed(2) + '%';
// }

// calcIsPercentOfWhat = () => {
// 	let a = document.forms.isPercentOfWhat.e.value,
// 		  b = document.forms.isPercentOfWhat.f.value/100,
// 		  c = a/b,
// 		  result = document.getElementById('result-three');

// 	if (!a || !b) return;

// 	result.innerText = (c % 2 === 0) ? c : c.toFixed(2);
// }
