// Get the modal
var modal = document.getElementsByClassName("modal")[0];

// Get the button that opens the modal
var buttons = document.querySelectorAll(".open-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });
});
// btn.onclick = function () {
//   console.log("btn", btn);
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
