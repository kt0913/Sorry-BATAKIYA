const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'SALMALI'; 
const nextPageUrl = 'main.html'; 
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'WELCOME GOLU BACCHA';
		window.location.href = nextPageUrl;
	} else {
		resultDiv.innerHTML = 'Wrong name u are not my golu baccha';
	}
});