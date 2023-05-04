import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', '');
startBtn.addEventListener('click', () => {
    const date = JSON.parse(localStorage.getItem('dateTime'));
    days.innerHTML = addLeadingZero(date.days);
    hours.innerHTML = addLeadingZero(date.hours);
    minutes.innerHTML = addLeadingZero(date.minutes);
    seconds.innerHTML = addLeadingZero(date.seconds);

    startBtn.setAttribute('disabled', '');
    
    let interval = setInterval(() => {

    if (seconds.innerHTML > 0) {
        seconds.innerHTML -= 1;
        if (seconds.innerHTML < 10) {
            seconds.innerHTML = addLeadingZero(seconds.innerHTML);
        }      
    } else if (minutes.innerHTML > 0) {
        minutes.innerHTML -= 1;
        seconds.innerHTML = '60';
        if (minutes.innerHTML < 10) {
            minutes.innerHTML = addLeadingZero(minutes.innerHTML);
        } 
    } else if (hours.innerHTML > 0) {
        hours.innerHTML -= 1;
        minutes.innerHTML = '60';
        if (hours.innerHTML < 10) {
            hours.innerHTML = addLeadingZero(hours.innerHTML);
        }
    } else if (days.innerHTML > 0) {
            days.innerHTML -= 1;
        hours.innerHTML = '23';
        if (days.innerHTML < 10) {
            days.innerHTML = addLeadingZero(days.innerHTML);
        }
    } else {
        clearInterval(interval);
        }
        
    }, 100);
});
    
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (options.defaultDate.getTime() > selectedDates[0].getTime()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtn.removeAttribute('disabled');
            let difference = convertMs(selectedDates[0].getTime() - options.defaultDate.getTime());
            localStorage.setItem('dateTime', JSON.stringify(difference));
    
        }
        
    },
};
flatpickr(inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
 function addLeadingZero(value) {
         return value = value.toString().padStart(2, '0');
};