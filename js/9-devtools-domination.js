const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// regular
console.log("hello");
// interpolated
console.log("Hello I am a %s string", "poop");
// styled
console.log("%c I am some great text", "font-size:40px; background:red");
//warning
console.warn("OH NOOO");
//error
console.error("OH NOOO");
//info
console.info("some interesting fact");
//testing
console.assert(p.classList.contains("ouch"), "Thats wrong");

//clearing
console.clear();
//viewing DOM elements
console.log(p);
console.dir(p);
//counting
console.count("abc");
console.count("abc");
console.count("abc");
console.count("abc");
