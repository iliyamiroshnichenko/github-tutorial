const firstName = 'Iliya';
const lastName = 'Miroshnychenko';
const room = '513';
const type = 'standart';

const fullName = firstName + ' ' + lastName;
console.log(fullName);
// const message = "Гость " + firstName + " " + lastName + ' поселяется в ' + type + ' номер ' + room;
const message = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

console.log(message);
console.log(message.length);

const superPassword = 'qwerty';
const userInput = prompt('Введи значение');
console.log('userInput before: ', userInput);

const normalizedInput = userInput.toLowerCase();
console.log("userInput after: ", userInput);
console.log("normalizedInput", normalizedInput);
console.log(superPassword === normalizedInput);