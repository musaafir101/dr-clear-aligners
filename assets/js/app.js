// VIDEO 1 JS


const video = document.getElementById("video");
const thumbnail = document.getElementById("thumbnail");
const playButton = document.getElementById("play-button");

// Thumbnail aur button ko hide karke video play kare
playButton.addEventListener("click", () => {
    thumbnail.style.display = "none";
    playButton.style.display = "none";
    video.play();
});

// Video ko bhi click se play/pause karne ki functionality add ki gayi hai
video.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// VIDEO 2 JS

const videoTwo = document.getElementById("video-two");
const thumbnailTwo = document.getElementById("thumbnail-two");
const playButtonTwo = document.getElementById("play-button-two");

// Thumbnail aur button ko hide karke video play kare
playButtonTwo.addEventListener("click", () => {
    thumbnailTwo.style.display = "none";
    playButtonTwo.style.display = "none";
    videoTwo.play();
});

// Video ko bhi click se play/pause karne ki functionality add ki gayi hai
videoTwo.addEventListener("click", () => {
    if (videoTwo.paused) {
        videoTwo.play();
    } else {
        videoTwo.pause();
    }
});


// VIDEO 3 JS

const videoThree = document.getElementById("video-three");
const thumbnailThree = document.getElementById("thumbnail-three");
const playButtonThree = document.getElementById("play-button-three");

// Thumbnail aur button ko hide karke video play kare
playButtonThree.addEventListener("click", () => {
    thumbnailThree.style.display = "none";
    playButtonThree.style.display = "none";
    videoThree.play();
});

// Video ko bhi click se play/pause karne ki functionality add ki gayi hai
videoThree.addEventListener("click", () => {
    if (videoThree.paused) {
        videoThree.play();
    } else {
        videoThree.pause();
    }
});

// VIDEO 4 JS

const videoFour = document.getElementById("video-four");
const thumbnailFour = document.getElementById("thumbnail-four");
const playButtonFour = document.getElementById("play-button-four");

// Thumbnail aur button ko hide karke video play kare
playButtonFour.addEventListener("click", () => {
    thumbnailFour.style.display = "none";
    playButtonFour.style.display = "none";
    videoFour.play();
});

// Video ko bhi click se play/pause karne ki functionality add ki gayi hai
videoFour.addEventListener("click", () => {
    if (videoFour.paused) {
        videoFour.play();
    } else {
        videoFour.pause();
    }
});

// VIDEO 5 JS

const videoFive = document.getElementById("video-five");
const thumbnailFive = document.getElementById("thumbnail-five");
const playButtonFive = document.getElementById("play-button-five");

// Thumbnail aur button ko hide karke video play kare
playButtonFive.addEventListener("click", () => {
    thumbnailFive.style.display = "none";
    playButtonFive.style.display = "none";
    videoFive.play();
});

// Video ko bhi click se play/pause karne ki functionality add ki gayi hai
videoFive.addEventListener("click", () => {
    if (videoFive.paused) {
        videoFive.play();
    } else {
        videoFive.pause();
    }
});


// VIDEO 6 JS

const videoSix = document.getElementById("video-six");
const thumbnailSix = document.getElementById("thumbnail-six");
const playButtonSix = document.getElementById("play-button-six");

// Thumbnail aur button ko hide karke video play kare
playButtonSix.addEventListener("click", () => {
    thumbnailSix.style.display = "none";
    playButtonSix.style.display = "none";
    videoSix.play();
});

// Video ko bhi click se play/pause karne ki functionality add ki gayi hai
videoSix.addEventListener("click", () => {
    if (videoSix.paused) {
        videoSix.play();
    } else {
        videoSix.pause();
    }
});


// FAQS JS

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// COUNT DOWN JS

// Set the date we're counting down to (13 days, 9 hours, 45 minutes, and 10 seconds from now)
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 13); // Add 13 days
countDownDate.setHours(countDownDate.getHours() + 9); // Add 9 hours
countDownDate.setMinutes(countDownDate.getMinutes() + 45); // Add 45 minutes
countDownDate.setSeconds(countDownDate.getSeconds() + 10); // Add 10 seconds

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in separate elements
  document.getElementById("days").innerHTML = days + "<br />" + "<span>DAYS</span>";
  document.getElementById("hours").innerHTML = hours + "<br />"  + "<span>HOURS</span>";
  document.getElementById("minutes").innerHTML = minutes + "<br />"  + "<span>MINUTES</span>";
  document.getElementById("seconds").innerHTML = seconds + "<br />"   + "<span>SECONDS</span>";
    
  // If the countdown is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);


// SLIDE GALLERY IMAGE ONE

let slider = document.querySelector("input[type='range']");
let beforeImage = document.querySelector(".image-before-one");
let afterImage = document.querySelector(".image-after-one");
// Removed the beforeSelector and afterSelector as they were not in your HTML
// let beforeSelector = document.querySelector("#before-selector");
// let afterSelector = document.querySelector("#after-selector");

let beforeImageWidth = getComputedStyle(beforeImage).width.slice(
  0,
  getComputedStyle(beforeImage).width.indexOf("p")
);

slider.addEventListener("input", (e) => {
  adjustImage(e.target);
});

function adjustImage(target) {
  beforeImage.style.width = `${(target.value / 100) * beforeImageWidth}px`;
}

// Update image functionality assumed to be here, but selectors are not defined in your HTML
function updateImage() {
  // If you add input fields for image upload, use the updated class names.
}

adjustImage(slider);
