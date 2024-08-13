'use strict';
//!==============

// Scrie un cronometru de numărătoare inversă pentru Anul Nou care poate fi oprit prin apăsarea butonului **Oprește**
// Stilurile și marcajul pot fi preluate de aici - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
// O sarcină suplimentară este să rescrii cronometrul folosind o clasă (amintește-ți de clasele din modulul 5, practică suplimentară înainte de React)

const timeEl = document.getElementById('time');
const stopBtn = document.getElementById('stopBtn');
const continueBtn = document.getElementById('continueBtn');

// data anul nou - data asta

const newYearDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);

countDownTimeToNY();

let timerId = setInterval(countDownTimeToNY, 1000);

stopBtn.addEventListener('click', () => {
  stopInverval();
  continueBtn.disabled = false;
});

continueBtn.addEventListener('click', () => {
  continueInterval();
  continueBtn.disabled = true;
});

function countDownTimeToNY() {
  const now = new Date();
  const diff = newYearDate - now;

  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((diff / (60 * 1000)) % 60);
  const secounds = Math.floor((diff / 1000) % 60);

  timeEl.textContent = `${days} d. ${hours} h. ${minutes} m.  ${secounds} s.`;

  if (diff <= 0) {
    stopInverval();
    alert('Happy New Year!');
  }
}

function continueInterval() {
  alert('continue interval');
  timerId = setInterval(countDownTimeToNY, 1000);
}

function stopInverval() {
  clearInterval(timerId);
  alert('The timer has been stopped!');
}
