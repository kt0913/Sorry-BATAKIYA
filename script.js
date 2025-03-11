const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Kavya'; 
const nextPageUrl = 'main.html'; 
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'WELCOME PASANDIDA MAHILA';
		window.location.href = nextPageUrl;
	} else {
		resultDiv.innerHTML = 'Wrong name u are not my pasandida mahila';
	}
});
