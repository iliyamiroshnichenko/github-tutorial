const checkboxes = document.querySelectorAll(".inbox [type='checkbox']");
let lastChecked;

function handleCheck(event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach((chb) => {
      if (chb === this || chb === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        chb.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((chb) => chb.addEventListener("click", handleCheck));

// const box = document.querySelector(".inbox");

// box.addEventListener("click", onCheckBoxClick);

// function onCheckBoxClick(event) {
//   if (event.target.nodeName !== "INPUT") return;
// }
