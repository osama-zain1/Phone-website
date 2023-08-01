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
