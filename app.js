const btnEl = document.getElementById("btn");

btnEl.addEventListener("mouseover", (axis) => {
  const x = axis.pageX- btnEl.offsetLeft;
  const y = axis.pageY- btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});

// btnEl.addEventListener("mouseover", () => {
//   btnEl.style.backgroundColor = "black";
//   btnEl.style.transition = "all 0.5s";
// });

// btnEl.addEventListener("mouseout", () => {
//   btnEl.style.backgroundColor = "pink";
//   btnEl.style.transition = "all 0.5s";
// });
