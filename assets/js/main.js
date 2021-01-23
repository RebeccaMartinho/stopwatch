function stopwatch() {

  function createHoursFromMilliseconds(milliseconds) {
    const data = new Date(milliseconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const stopwatch = document.querySelector('.stopwatch');
  let seconds = 0;
  let timer;

  function startStopwatch() {
    timer = setInterval(function() {
      seconds++;
      stopwatch.innerHTML = createHoursFromMilliseconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;
  
    if(el.classList.contains('reset')) {
      clearInterval(timer);
      stopwatch.classList.remove('paused');
      stopwatch.innerHTML = '00:00:00';
      seconds = 0;
    }

    if(el.classList.contains('start')) {
      stopwatch.classList.remove('paused');
      clearInterval(timer);
      startStopwatch();
    }

    if(el.classList.contains('pause')) {
      clearInterval(timer);
      stopwatch.classList.add('paused');
    }
 });
}
stopwatch();