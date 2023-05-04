import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const firstDelay = form.elements.delay;
const step = form.elements.step;
const amount = form.elements.amount;
const btn = document.querySelector('button[type ="submit"]');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  for (let i = 1; i <= amount.value; i++) {
    const delay = i === 1 ? Number(firstDelay.value) : Number(firstDelay.value) + (i - 1) * Number(step.value);
    createPromise(i, delay).then(value => {
        Notiflix.Notify.success(value);
      }).catch(err => {
        Notiflix.Notify.failure(err);
      });
  }
})

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (shouldResolve) {
      
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } reject(`❌ Rejected promise ${position} in ${delay}ms`);
    
    }, delay);
  });
}