const square = document.querySelector("#square");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

const colorArray = ["white", "purple", "orange", "cyan"]
let currentIndex = 0;

minus.addEventListener("click", colorChangeMinus);
plus.addEventListener("click", colorChangePlus)

function colorChangeMinus() {
    console.log("I pressed the minus button")

    currentIndex--;
    square.className = colorArray[currentIndex];
}

function colorChangePlus() {
    console.log("I pressed the plus button");
  
    currentIndex++;
    square.className = colorArray[currentIndex];
}