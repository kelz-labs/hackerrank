const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
let temp = [];

let totalClick = 0;

btn5.addEventListener("click", () => {
  totalClick += 1;

  for (let i = 0; i < arr.length; i++) {
    temp = arr.slice(i);
  }

  console.log(temp);
});
