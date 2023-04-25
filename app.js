const pinkButton = document.querySelector(".pink");
const blueButton = document.querySelector(".blue");
const yellowButton = document.querySelector(".yellow");
const fileInput = document.querySelector("input[type='file']");
const previewImage = document.querySelector("#preview");
const fileBox = document.querySelector('label')

blueButton.addEventListener("click", function() {
  previewImage.src = "./Blue umbrella.png";
  document.body.style.backgroundColor = 'rgb(172, 236, 252)';
  fileBox.style.backgroundColor = 'rgb(29, 127, 255)';
//   previewImage.style.display = "block";
});

pinkButton.addEventListener("click", function() {
  previewImage.src = "./Pink umbrella.png";
  document.body.style.backgroundColor = 'rgb(255, 196, 247)';
  fileBox.style.backgroundColor = 'rgb(232, 84, 108)';
//   previewImage.style.display = "block";
});

yellowButton.addEventListener("click", function() {
  previewImage.src = "Yello umbrella.png";
  document.body.style.backgroundColor = 'rgb(254, 255, 196)';
  fileBox.style.backgroundColor = 'rgb(215, 215, 48)';
//   previewImage.style.display = "block";
});

// function previewImage(event) {
//   const file = event.target.files[0];
//   const reader = new
