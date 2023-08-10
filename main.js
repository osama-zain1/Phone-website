///////////////////////
var cricle = document.getElementById("circle");
var upBtn = document.getElementById("up");
var downBtn = document.getElementById("down");

var rotateValue = cricle.style.transform;
var rotateSum;
/////////////
////// Rotation UP Down
upBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  cricle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  cricle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
//////////////////////

let menuLinks = document.querySelector(".menuLinks");
let menuB = document.querySelector("#menuB");

menuB.onclick = function () {
  if (menuLinks.style.display === "flex") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "flex";
  }
};

document.addEventListener("click", function (e) {
  if ((e.target != menuB) & (e.target != menuLinks)) {
    menuLinks.style.display = "none";
  }
});
