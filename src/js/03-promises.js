// import Notiflix from 'notiflix';

// const formElement = document.querySelector('.form');
// const delayElement = document.querySelector('input[name="delay"]');
// const stepElement = document.querySelector('input[name="step"]');
// const amountElement = document.querySelector('input[name="amount"]');
// const submitBtn = document.querySelector('button[type="submit"]');


// // form.addEventListener('submit', getValues);
// // submitBtn.addEventListener('click', () => {
// //   setTimeout(generatePromises, delayValue);
// // });

// formElement.addEventListener('submit', getValues);
// submitBtn.addEventListener('click', generatePromise);

// function createPromise(position, delayElement) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delayElement });
//       }
//       reject({ position, delayElement });
//     }, delayElement);
//   });
// }

// function generatePromise(event) {
//   event.preventDefault();

//   let delayValue = parseInt(delayElement.value);
//   let amountValue = parseInt(amountElement.value);

//   for (let i = 1; i <= amountValue; i++) {
//         createPromise(i, delayValue).then(({ position, delay }) => {
//          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         }).catch(({ position, delay }) => {
//           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//         });
    
//         delay += stepElement; // Increment delay for the next promise
//       }

// }

import Notiflix from 'notiflix';

const formElement = document.querySelector('.form');
const delayElement = document.querySelector('input[name="delay"]');
const stepElement = document.querySelector('input[name="step"]');
const amountElement = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('button[type="submit"]');

formElement.addEventListener('submit', getValues);
submitBtn.addEventListener('click', generatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function getValues(event) {
  event.preventDefault();
  // Retrieve form values and perform necessary operations
}

function generatePromise(event) {
  event.preventDefault();

  let delayValue = parseInt(delayElement.value);
  let amountValue = parseInt(amountElement.value);

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayValue += parseInt(stepElement.value); // Increment delay for the next promise
  }
}