const btnEl = document.getElementById("btn");

btnEl.addEventListener("mouseover", () => {
  btnEl.style.backgroundColor = "black";
  btnEl.style.transition = "all 0.5s";
});

btnEl.addEventListener("mouseout", () => {
  btnEl.style.backgroundColor = "pink";
  btnEl.style.transition = "all 0.5s";
});
