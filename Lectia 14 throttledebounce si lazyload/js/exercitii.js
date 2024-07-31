//! Exercițiul 1: Monitorizare Evenimente de Scroll

// const faraThrottling = document.getElementById('outputScrollStandart');
// const cuThrottling = document.getElementById('outputScrollThrottling');

// const eventDataScroll = {
//   faraThrottling: 0,
//   cuThrottling: 0,
// };

// document.addEventListener('scroll', () => {
//   eventDataScroll.faraThrottling++;
//   faraThrottling.textContent = eventDataScroll.faraThrottling;
// });

// function handleThrottling() {
//   eventDataScroll.cuThrottling++;
//   cuThrottling.textContent = eventDataScroll.cuThrottling;
// }

// document.addEventListener('scroll', _.throttle(handleThrottling, 10000));

//! Exercițiul 2: Monitorizare Evenimente de Redimensionare

// const faraDebounce = document.getElementById('outputResizeStandart');
// const cuDebounce = document.getElementById('outputResizeDebounce');

// const eventDataResize = {
//   faraDebounce: 0,
//   cuDebounce: 0,
// };

// window.addEventListener('resize', () => {
//   eventDataResize.faraDebounce++;
//   faraDebounce.textContent = eventDataResize.faraDebounce;
// });

// function handleDebounce() {
//   eventDataResize.cuDebounce++;
//   cuDebounce.textContent = eventDataResize.cuDebounce;
// }

// window.addEventListener('resize', _.debounce(handleDebounce, 5000));

//! Exercițiul 3: Gestionarea Input-urilor cu Debounce

const signInForm = document.getElementById('signInForm');

function handleForm(event) {
  if (event.target.value.length < 3 || event.target.value.length > 15) {
    event.target.classList.add('wrong');
    event.target.classList.remove('correct');
  } else {
    event.target.classList.add('correct');
    event.target.classList.remove('wrong');
  }
}

signInForm.addEventListener('input', _.debounce(handleForm, 800));
