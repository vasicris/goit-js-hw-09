import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      dateSelected = selectedDates[0];
      if (dateSelected < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
      }
      btnStart.disabled = false;
    },
  };

  flatpickr(datePicker, options);

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
        return String(value).padStart(2, '0');
      }
    
let dateSelected = null;

  function countDownTime() {
   const ms = dateSelected - new Date();
    if (ms >= 0) {
        let timeObject = convertMs(ms);
        days.textContent = addLeadingZero(timeObject.days);
        hours.textContent = addLeadingZero(timeObject.hours);
        minutes.textContent = addLeadingZero(timeObject.minutes);
        seconds.textContent = addLeadingZero(timeObject.seconds);
      } else {
        Notiflix.Notify.success('Countdown finished');
        clearInterval(intervalId);
      }

    let convertedValues = convertMs(ms);
    addLeadingZero(convertedValues);
    days.textContent = convertedValues.days;
    hours.textContent = convertedValues.hours;
    minutes.textContent = convertedValues.minutes;
    seconds.textContent = convertedValues.seconds;
  }
  
  btnStart.addEventListener('click', () => {
    intervalId = setInterval(countDownTime, 1000);
  });
