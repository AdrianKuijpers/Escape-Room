let sound = new Audio("Sound/switch-sound.mp3");
const slot = document.querySelector('.slot');
slot.addEventListener('click', function () {
  let code = prompt("Enter the 4 digit code");
  if (code === "2697") {
  sound.play()
  alert (location.href = "Win.html")
} else 
  alert ("Incorrect");
});