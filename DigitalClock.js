// load event listeners
loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', calcTime);
};


// calculate date, hour, minute and second
function calcTime() {
  //ui variables
  const date = new Date();
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // select element
  document.querySelector('.clock-day').innerHTML = day[date.getDay()];
  document.querySelector('.clock-hours').innerHTML = addZero(hours);
  document.querySelector('.clock-minutes').innerHTML = addZero(minutes);
  document.querySelector('.clock-seconds').innerHTML = addZero(seconds);

  // add if 0 < 10
  function addZero(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn;
    }
    return standIn;
  }
}

setInterval(calcTime, 1000);