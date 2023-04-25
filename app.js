const pinkButton = document.querySelector(".pink");
const blueButton = document.querySelector(".blue");
const yellowButton = document.querySelector(".yellow");
const fileInput = document.querySelector("input[type='file']");
const previewImage = document.querySelector("#preview");

pinkButton.addEventListener("click", function() {
  previewImage.src = "./Pink umbrella.png";
//   previewImage.style.display = "block";
});

blueButton.addEventListener("click", function() {
  previewImage.src = "./Blue umbrella.png";
//   previewImage.style.display = "block";
});

yellowButton.addEventListener("click", function() {
  previewImage.src = "Yello umbrella.png";
//   previewImage.style.display = "block";
});

// function previewImage(event) {
//   const file = event.target.files[0];
//   const reader = new
