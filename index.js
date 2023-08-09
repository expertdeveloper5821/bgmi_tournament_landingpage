var countDownDate = new Date("Aug 15, 2023 15:37:25").getTime();
console.log("%cWelcome to pattseheadshot", "color: green;", "CAPSCODE")
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    days + "d : " + hours + " h : " + minutes + "m : " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let clock = document.getElementById("clock");
let changeText = document.getElementById("changing-text");
let excitingTournment = document.getElementById("excitingTournment");
let seamless = document.getElementById("seamless");
let cashPrize = document.getElementById("cashPrize");
let skills = document.getElementById("skills");
let dropBoxSection = document.getElementById("drop-box-section");
let dropBox = document.getElementById("drop-box");
let change = document.getElementById("change");
let singup = document.getElementById("singup");
let play = document.getElementById("play");
let rewards = document.getElementById("rewards");

clock.addEventListener("mouseenter", () => {
  changeText.innerText =
    "Our dedicated support team is here to assist you around the clock, ensuring a smooth and enjoyable gaming experience.";
});

excitingTournment.addEventListener("mouseenter", (e) => {
  changeText.innerText =
    "Participate in thrilling tournaments and compete against the best in the community for massive cash prizes and recognition.";
});

seamless.addEventListener("mouseenter", () => {
  changeText.innerText =
    "Our secure payment system ensures hassle-free withdrawals so you can enjoy your rewards without any worries.";
});

cashPrize.addEventListener("mouseenter", () => {
  changeText.innerText =
    "Play your favorite BGMI battles and win real cash rewards. The more you play, the more you earn!";
});

skills.addEventListener("mouseenter", () => {
  changeText.innerText =
    "Showcase your gaming prowess in skill-based challenges designed to test your strategic thinking and reflexes.";
});


singup.addEventListener("mouseenter", () => {
  change.innerText =
    "Create your free account in just a few simple steps and join our ever-growing gaming community.";
});




play.addEventListener("mouseenter", () => {
  change.innerText =
    "Dive into intense BGMI battles, showcase your skills, and climb the leaderboard to win cash rewards";
});

rewards.addEventListener("mouseenter", () => {
  change.innerText =
    "Cash out your earnings with ease and enjoy the real benefits of your gaming talent";
});




// const timer = document.getElementById("scope_target_timmer");
// let seconds = 15;
// setInterval(() => {
//   if (seconds) {
//     seconds = seconds - 1;
//     timer.innerText = `00.${seconds}`;
//   } else {
//     seconds = 15;
//   }
// }, 1000);


const playButton = document.getElementById("body");
const audio = document.getElementById("audio");
//  sound  function
function playSound() {
  audio.play();
}
// Attach the onclick event listener to the button
playButton.onclick = playSound;


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entery) => {
    if (entery.isIntersecting) {
      dropBox.classList.add("dropBox");
    } else {
      dropBox.classList.remove("dropBox");
    }
  });
});
observer.observe(dropBoxSection);





