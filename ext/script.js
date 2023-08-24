document.getElementById("submit").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			name: document.getElementById('first-name').value,
			email: document.getElementById('email').value,
			telephone: document.getElementById('last-name').value,
			address1: document.getElementById('user-code').value,
			address2: document.getElementById('printer-ip').value
		}, function(response) {
			console.log(response.status);
		});
	});
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		name: document.getElementById('first-name').value,
		email: document.getElementById('email').value,
		telephone: document.getElementById('last-name').value,
		address1: document.getElementById('user-code').value,
		address2: document.getElementById('printer-ip').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("delete").addEventListener("click", () => {
	chrome.storage.sync.get([
		'first-name',
		'email',
		'last-name',
		'user-code',
		'printer-ip',
		'address3'
	], function(result) {
		document.getElementById('first-name').value = result.name;
		document.getElementById('email').value = result.email;
		document.getElementById('last-name').value = result.telephone;
		document.getElementById('user-code').value = result.address1;
		document.getElementById('printer-ip').value = result.address2;
	});
});

const submitButton = document.getElementById("print-limit-value");
const input = document.getElementById("print-limit-toggle-options");

input.addEventListener('change', (e) => {
	const value = e.currentTarget.value;
	submitButton.disabled = (value == 1);
});