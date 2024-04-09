document.addEventListener('DOMContentLoaded', function () {
  const launchDate = new Date('2024/05/01').getTime(); // Set your launch date in "YYYY/MM/DD" format

  let timer = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = launchDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (timeleft < 0) {
      clearInterval(timer);
      document.getElementById('timer').innerHTML = 'We are live now!';
    }
  }, 1000);
});
