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
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s";
    
  // If the countdown is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);