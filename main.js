const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

function moveSecondsHand() {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsHandDegree = seconds * (360 / 60);
  secondsHand.style.transform = `rotate(${90 + secondsHandDegree}deg)`;

  if (seconds === 0) {
    moveMinutesHand();
  }
}

function moveMinutesHand() {
  const date = new Date();
  minutesHand.style.transform = `rotate(${
    90 + date.getMinutes() * (360 / 60)
  }deg)`;

  if (date.getMinutes() === 0) {
    moveHoursHand();
  }
}

function moveHoursHand() {
  hoursHand.style.transform = `rotate(${
    new Date().getHours() * (360 / 12) + 90
  }deg)`;
}

setInterval(moveSecondsHand, 1 * 1000);
