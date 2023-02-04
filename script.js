const numbers = document.querySelectorAll(".numbers");
const result = document.getElementById("resulted");

var firstClick;
var lastClick;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", e => {
    let atr = e.target.getAttribute("value");
  });
}
