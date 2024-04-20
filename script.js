const adviceid = document.getElementById('adviceid');
const advicetext = document.getElementById('advicetext');
const bino = document.getElementById('bino');

function fetchadvice () {
    fetch ('https://api.adviceslip.com/advice')
    .then((Response) => Response.json())
    .then ((data) => {
        adviceid.innerHTML = data.slip.id ;
        advicetext.innerHTML = data.slip.advice;
    });
}
bino.addEventListener('click', fetchadvice);

window.onload = fetchadvice();