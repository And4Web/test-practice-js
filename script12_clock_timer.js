// digital clock

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const dateDay = document.querySelector('.date-day');

const clockWrapper = document.querySelector('.clock-wrapper');
const spans = document.getElementsByTagName('span');

function setStyles(element, properties){
  let styleKeys = Object.keys(properties);
  let styleValues = Object.values(properties);

  styleKeys.forEach((key, index)=>{
    Object.assign(element.style, {
      [key]: styleValues[index]
    })
  })
}

let clockWrapperStyles = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: 'center',
  padding: "1rem",
  borderRadius: "5px",
  boxShadow: "1px 1px 5px gray",
}

setStyles(clockWrapper, clockWrapperStyles)

for(let i=0; i<spans.length; i++){
  spans[i].style.fontSize = "2rem";
  spans[i].style.fontWeight = "bold";
}

function digitalClock(){
  const d = new Date();
  
  let newHours = d.getHours() >= 10 ? `${d.getHours()}` : `0${d.getHours()}`;
  let newMinutes = d.getMinutes() >= 10 ? `${d.getMinutes()}` : `0${d.getMinutes()}`;
  let newSeconds = d.getSeconds() >= 10 ? `${d.getSeconds()}` : `0${d.getSeconds()}`

  let am_pm = newHours >=12 ? "PM" : "AM";

  newHours = newHours <= 12 ? newHours : newHours - 12;

  hours.innerHTML = ` ${newHours}:`;
  minutes.innerHTML = ` ${newMinutes}:`;
  seconds.innerHTML = ` ${newSeconds} ${am_pm} `;
  dateDay.innerHTML = `${d.toDateString().split(" ")[0]}, ${d.toDateString().split(" ").slice(1,3).join(" ")}, ${d.toDateString().split(' ').slice(3).join('')}`;
  // console.log(am_pm);
}

setInterval(digitalClock, 1000);



// timer/stopwatch

const timerWrapper = document.querySelector('.timer-wrapper');
const timerBtnWrapper = document.querySelector('.timer-btn-wrapper');
const timerContainer = document.querySelector('.timer-container');
const timerBtns = document.getElementsByTagName('button');

const timerWrapperStyles = {
  width: "50%",
  boxShadow: "1px 1px 5px gray",
  borderRadius: "5px",
  padding:"1rem",
  textAlign: "center",
  margin: "1rem 0"
}
const containerStyles = {display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", width: '70%'};

setStyles(timerWrapper, timerWrapperStyles);
setStyles(timerContainer, containerStyles);

let timerBtnStyles = {
  cursor: "pointer",
  padding: '10px',
  outline: "none",
  border: "none",
  margin: "10px",
  borderRadius: "5px",
  boxShadow: "1px 1px 5px gray",  
}

for(let i=0; i<timerBtns.length; i++){
  setStyles(timerBtns[i], timerBtnStyles);
  timerBtns[i].addEventListener('mousedown', ()=>setStyles(timerBtns[i], {boxShadow: "inset 1px 1px 2px gray"}))
  timerBtns[i].addEventListener('mouseup', ()=>setStyles(timerBtns[i], {boxShadow: " 1px 1px 5px gray"}))
  
}

const startTimer = document.querySelector('.start-timer');
const stopTimer = document.querySelector('.stop-timer');
const resetTimer = document.querySelector('.reset-timer');

const timerHours = document.querySelector('.timer-hours');
const timerMinutes = document.querySelector('.timer-minutes');
const timerSeconds = document.querySelector('.timer-seconds');

let stop_start = "START";

function timer(){
  stop_start = "START";

  let secondsCount = 0;
  let minutesCount = 0;
  let hoursCount = 0;

 let interval = setInterval(()=>{
    secondsCount += 1;
    timerSeconds.innerHTML = secondsCount < 10 ? `0${secondsCount}`: `${secondsCount}`;
    if(secondsCount > 59){
      secondsCount = 0;
      minutesCount += 1;
      timerSeconds.innerHTML = `0${secondsCount}`
      timerMinutes.innerHTML = minutesCount < 10 ? `0${minutesCount}:`: `${minutesCount}:`;
    }
    if(minutesCount > 59){
      minutesCount = 0;
      hoursCount += 1;
      timerMinutes.innerHTML = `0${minutesCount}:`
      timerHours.innerHTML = hoursCount < 10 ? `0${hoursCount}:`: `${hoursCount}:`;
    }
    // console.log(count)
  }, 1000);

  
  stopTimer.addEventListener('click', ()=>{
    clearInterval(interval);
    stop_start = "STOP";
  }
  )
  
  resetTimer.addEventListener('click', ()=>{
    clearInterval(interval);
    timerSeconds.innerHTML = '00';
    timerMinutes.innerHTML = '00:';
    timerHours.innerHTML = '00:';
  });
}

startTimer.addEventListener('click', stop_start === "START" ? timer : null)
// timer();