const API_URL = "https://gaming-portal-be.vercel.app/api/v1/room/rooms";

var lastTournament;
fetch(API_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) => {
    lastTournament = data[0].rooms.pop();
    var html = `<div>
        <h2 class="bgmiHead">${lastTournament.gameName}</h2>
        <p class="bgmi_para">Time: ${lastTournament.date} at ${lastTournament.time} pm</p>
        </div>
        <div class="winning_prize">
          <div class="winning_sec_left">
            <p class="winning_Para">WINNING PRIZE &nbsp <button id="openPopupBtn"><i class="fa-solid fa-arrow-down"></i></button></p>

            <div id="popup" class="popup">
            <div class="popup-content">
              <span class="close" id="closePopupBtn">&times;</span>
           
              <div class="WinngColor">

           <div class="winningSec">
           <h4 class="WiiningPoolSec">WINNING PRIZE POOL</h4>
           <p clas="pool">BGMI Squad match</p>
           </div>
              <div class="prizePool" id="popupp"></div>
              </div>
            </div>
          </div>

          
            <h3 class="text_size">Last Survival: 200<span> <img src="./assets/rupee img.svg" class="rupee" /></span
              ></h3>
          </div>
          <div class="winning_sec_right">
            <p class="winning_Para">ENTERY FEES</p>
            <span class="text_size"
              >
              60<span> <img src="./assets/rupee img.svg" class="rupee" /></span
            ></span>
          </div>
        </div>
        <div class="typeandversion">
          <div class="first">
            <p class="winning_Para">TYPE</p>
            <h4 class="text_color">${lastTournament.gameType}</h4>
          </div>
          <div class="second">
            <p class="winning_Para">VERSION</p>
            <h4 class="text_color">${lastTournament.version}</h4>
          </div>
          <div class="third">
            <p class="winning_Para">MAP</p>
            <h4 class="text_map">${lastTournament.mapType}</h4>
          </div>
        </div>
        <div class="spots">
          <div class="spot_space">
            <input type="range" class="input_range" disabled />
            <p class="winning_Para_top">Only 30 spots left 20/50</p>
          </div>
          <div class="button_space">
            <a href="https://app.pattseheadshot.com/auth/signup" target="_blank" class="btn">JOIN</a>
          </div>
        </div>`;

    document.getElementById("rooms").innerHTML = html;

    var matches = data[1].rooms;

    var allimg = "";
    matches.forEach((element) => {
      console.log(element);
      allimg += `<img  src="./assets/1.svg" alt="1" />`;
    });
    document.getElementById("allImges").innerHTML = allimg;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  })
  .finally(() => {
    const popUpButton = document.getElementById("openPopupBtn");
    const popUp = document.getElementById("popup");
    const closePopUp = document.getElementById("closePopupBtn");

    closePopUp.addEventListener("click", () => {
      popUp.style.display = "none";
    });

    var popuppp = "";
    popUpButton.addEventListener("click", () => {
      popuppp = `<h5>Last Survival: ${lastTournament.lastServival} <span> <img src="./assets/rupee img.svg" class="rupee"></span> </h5>
      <h5>Highest kill: ${lastTournament.highestKill} <span> <img src="./assets/rupee img.svg" class="rupee"></span> </h5>
      <h5>2nd Winner: ${lastTournament.secondWin}  <span> <img src="./assets/rupee img.svg" class="rupee"></span>  </h5>
      <h5>3nd Winner: ${lastTournament.thirdWin} <span> <img src="./assets/rupee img.svg" class="rupee"></span> </h5>`;
      document.getElementById("popupp").innerHTML = popuppp;
      popUp.style.display = "block";
    });
  });

var countDownDate = new Date("Aug 15, 2023 15:37:25").getTime();
console.log(
  "%cWelcome to pattseheadshot",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%"
);
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



const playButton = document.getElementById("body");
const audio = document.getElementById("audio");
//  sound  function
function playSound() {
  audio.play();
}
// Attach the onclick event listener to the button
playButton.onclick = playSound;




 
// function handleLoad() {
//   const search = window.location.search;

//   if (search.includes('token')) {
//     // Extract the token value from the URL
//     const tokenValue = new URLSearchParams(search).get('token');
    
//     // Store the token in localStorage
//     localStorage.setItem('token', tokenValue);
//   } else {
//     // Redirect to a different URL
//     window.location.href = 'https://pattseheadshot.com';
//   }
// }

// Call the function when the document has finished loading
