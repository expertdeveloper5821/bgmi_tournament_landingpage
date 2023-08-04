

var countDownDate = new Date("Aug 15, 2023 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h  " + minutes + "m " + seconds + "s ";
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


clock.addEventListener("mouseenter",() => {
  changeText.innerText = "Our dedicated support team is here to assist you around the clock, ensuring a smooth and enjoyable gaming experience.";
});

excitingTournment.addEventListener("mouseenter", (e)=>{
  changeText.innerText="Participate in thrilling tournaments and compete against the best in the community for massive cash prizes and recognition.";
});

seamless.addEventListener("mouseenter",() => {
  changeText.innerText="Our secure payment system ensures hassle-free withdrawals so you can enjoy your rewards without any worries."
});


cashPrize.addEventListener("mouseenter",() => {
  changeText.innerText="Play your favorite BGMI battles and win real cash rewards. The more you play, the more you earn!"
});

skills.addEventListener("mouseenter",() => {
  changeText.innerText="Showcase your gaming prowess in skill-based challenges designed to test your strategic thinking and reflexes."
});


