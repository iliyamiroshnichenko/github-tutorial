// const value = 'sdf';
// const number = Number(value);
// console.log(number);
// console.log(typeof number);

// const blockWidth = '300.5px';
// const width = Number.parseFloat(blockWidth);
// console.log(width);
// console.log(typeof width);

let number = prompt('Введите число');
number = Number(number);
let power = prompt("Введите степень числа");
power = Number(power);
console.log(number);
console.log(typeof number);
console.log(power);
console.log(typeof power);
const result = Math.pow(number, power);
console.log(result);