let noButtonMoved = false;

document.getElementById('yesButton').onclick = handleClick;
document.getElementById('noButton').onclick = handleClick;

function handleClick(event) {
    event.preventDefault(); 

    if (event.target.id === 'yesButton') {
        window.location.href = 'yes.html';
    } else if (event.target.id === 'noButton') {
        moveNoButton();
        noButtonMoved = true; 
    }

    if (!noButtonMoved) {
        swapButtons(); 
    }

    showHeart(event.clientX, event.clientY); 
}

function swapButtons() {
    let yesButton = document.getElementById('yesButton');
    let noButton = document.getElementById('noButton');

   
    let tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;

 
    let tempHref = yesButton.href;
    yesButton.href = noButton.href;
    noButton.href = tempHref;
}

function moveNoButton() {
    let noButton = document.getElementById('noButton');
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function showHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);


    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}