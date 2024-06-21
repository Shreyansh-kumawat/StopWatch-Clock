const time = document.querySelector(".clock");
const start = document.querySelector(".head1");
const reset = document.querySelector(".head0");
const pause = document.querySelector(".pause1");
const video = document.querySelector("#myVideo");

const audioWarn = new Audio("audio/warn.mp3");
const audioTick = new Audio("audio/tic.mp3");

audioTick.loop = true;


video.pause();



let real_time = 0;

let startIt = false;

let intervalId = null;


const update_time = () => {
    if(startIt) {
    real_time++;
    
    const hr = Math.floor(real_time / 3600).toString().padStart(1, "0")

    const min = Math.floor((real_time % 3600) / 60).toString().padStart(2, "0")

    const sec = Math.floor(real_time % 60).toString().padStart(2, "0");

    time.innerText = `${hr}:${min}:${sec}`;
}}




const startClock = () => {

audioWarn.play();

setTimeout(() => {
            if (!startIt) {
        startIt = true;
        intervalId = setInterval(update_time, 1000);


 start.innerText = "";
 start.classList.remove("head1");
 start.classList.add("hideStart");


 reset.innerText = "Reset";
 reset.style.display = "flex";


 pause.style.backgroundImage = 'url("img/pause.jpg")';
 pause.style.backgroundSize = "cover";
pause.classList.add("for_pause");


   
audioTick.play();
video.play();

}else{
 
     };
    }, 2400);
};





const pauseClock = () => {
    if(startIt){
    startIt= false;
    audioTick.pause();
    video.pause();
    clearInterval(intervalId);
    intervalId = null;
   
 pause.style.backgroundImage = 'url("img/play.jpg")';
 pause.style.backgroundSize = "cover"

 

} else {
    startIt = true;
    
    audioTick.play();
    video.play();
    intervalId = setInterval(update_time, 1000);
   
    
    if (startIt) {
   
     pause.style.backgroundImage = 'url("img/pause.jpg")'
 pause.style.backgroundSize = "cover";


} 
}}

const resetClock = () => {
    
    window.location.reload();
  };



reset.addEventListener("click", resetClock);

start.addEventListener("click", startClock);

pause.addEventListener("click", pauseClock);


