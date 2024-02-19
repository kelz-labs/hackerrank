const res = document.getElementById("res");

const btns = document.getElementById("btns");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

let showedResult = [];
let totalClick = 0;

btn0.addEventListener("click", () => {
  res.innerHTML += 0;
});

btn1.addEventListener("click", () => {
  res.innerHTML += 1;
});

btnClr.addEventListener("click", () => {
  res.innerHTML = "";
});

btnEql.addEventListener("click", () => {
  const result = eval(res.innerHTML.toString());
  res.innerHTML = result;
});

btnSum.addEventListener("click", () => {
  res.innerHTML += "+";
});

btnSub.addEventListener("click", () => {
  res.innerHTML += "-";
});

btnMul.addEventListener("click", () => {
  res.innerHTML += "*";
});

btnDiv.addEventListener("click", () => {
  res.innerHTML += "/";
});
