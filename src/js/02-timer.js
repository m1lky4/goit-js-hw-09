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
            let newDate = convertMs(selectedDates[0].getTime() - options.defaultDate.getTime());
            addLeadingZero(newDate);
    
        }
        function addLeadingZero(value) {
            value.days = value.days.toString().padStart(2, '0');
            value.hours = value.hours.toString().padStart(2, '0');
            value.minutes = value.minutes.toString().padStart(2, '0');
            value.seconds = value.seconds.toString().padStart(2, '0');
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
