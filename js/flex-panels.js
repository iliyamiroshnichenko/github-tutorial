const panels = document.querySelector(".panels");

panels.addEventListener("click", toggleOpen);

function toggleOpen(event) {
  //   this.classList.toggle("open");
  const panel = event.target;
  const currentActive = panels.querySelector(".panel.open");
  if (currentActive) {
    currentActive.classList.remove("open", "open-active");
  }
  if (panel.nodeName === "P") {
    panel.parentNode.classList.add("open", "open-active");
  } else {
    panel.classList.add("open", "open-active");
  }
  if (panel === currentActive || panel.parentNode === currentActive) {
    currentActive.classList.remove("open", "open-active");
  }
}
