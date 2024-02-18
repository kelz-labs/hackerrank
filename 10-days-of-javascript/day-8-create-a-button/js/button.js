const incrementButton = document.getElementById("btn");

incrementButton.addEventListener("click", () => {
  const currentValue = Number(incrementButton.innerHTML);
  incrementButton.innerHTML = currentValue + 1;
});
