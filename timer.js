window.onload = function () {
  // Month Day, Year Hour:Minute:Second
  // June 16, 2019 is the day I...
  countUpFromTime("Jun 16, 2019 12:00:00");
};

const countUpFromTime = (countFrom) => {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
    countFrom = new Date(countFrom),
    timeDifference = now - countFrom;

  var secondsInADay = 60 * 60 * 1000 * 24,
    secondsInAHour = 60 * 60 * 1000;

  days = Math.floor((timeDifference / secondsInADay) * 1);

  hours = Math.floor(((timeDifference % secondsInADay) / secondsInAHour) * 1);
  mins = Math.floor(
    (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
  );
  secs = Math.floor(
    ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1
  );

  document.getElementById("timer").innerHTML = `
        <div>${days}<span>days</span></div>
        <div>${hours}<span>hours</span></div>
        <div>${mins}<span>mins</span></div>
        <div>${secs}<span>secs</span></div> `;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(() => countUpFromTime(countFrom), 1000);
};
