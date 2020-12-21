const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const px = this.dataset.sizing || "";
  console.log(this.name);
  console.log(this.value);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
