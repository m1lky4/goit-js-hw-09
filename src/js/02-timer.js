import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (options.defaultDate.getTime() > selectedDates[0].getTime()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtn.disabled = false;
        }
    },
};

flatpickr(inputDate, options);

startBtn.disabled = true;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    inputDate.disabled = true;

    let interval = setInterval(() => {
    const timeLeft =  new Date(inputDate.value) - new Date();
    const date = convertMs(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(interval);
            Notiflix.Notify.info('Time is up!');
            return;
        } 
          daysValue.textContent = date.days;
          hoursValue.textContent = date.hours;
          minutesValue.textContent = date.minutes;
          secondsValue.textContent = date.seconds;       
    }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

 function addLeadingZero(value) {
     return value.toString().padStart(2, '0');
};