const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const colors_array = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let time = 0;
let score = 0;
startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createrandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createrandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  //timeEl.parentNode.remove()
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчет: <span class="primary">${score} </span></h1>`;
}

function createrandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();
  circle.classList.add("circle");
  circle.style.background = `linear-gradient(90deg, ${color[0]} 0%, ${color[1]} 47%, ${color[2]} 100%)`;
  circle.style.boxShadow=`0 0 5px #fff`
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function getRandomColor() {
  let color_arr = [];
  for (let z = 0; z < 3; z++) {
    let color_item = "#";
    for (let i = 0; i < 6; i++) {
      let index_letter = Math.floor(Math.random() * colors_array.length);
      color_item += `${colors_array[index_letter]}`;
    }
    color_arr.push(color_item)
  }
  //console.log(color_arr)
  return color_arr;
}

function winTheGame(){
  function kill(){
      const circle = document.querySelector('.circle')
      if(circle){
          circle.click()
      }
  }
  setInterval(kill,42)
}