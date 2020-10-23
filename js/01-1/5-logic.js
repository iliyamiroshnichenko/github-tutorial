console.log(Boolean(' '));
console.log(10 && 1);

const number = 32;

// const isInRange = number > 10 && number < 30;
// console.log(`Число ${number} попадает в отрезок от 10 до 30? `, isInRange);

const isInRange = number < 10 || number > 30;
console.log(`Число ${number} попадает в отрезок до 10 или после 30? `, isInRange);

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('canOpenChat', canOpenChat);

const subscription = 'pro';
const canAccessContent = subscription === 'pro' || subscription === 'VIP';
console.log("canAccessContent", canAccessContent);