// console.log('before');
// if (5 > 6) {
//     console.log("inside");
// }
// console.log("after");

// let balance = 10000;
// const payment = 2000;
// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных стредств`
// );
// if (balance >= payment) {
//     balance -=payment;
//     console.log('Все хорошо, снимаем деньги, спасибо за покупку!)');
//     console.log(`На Вашем счету осталось ${balance} кредитов`);
// }
// else {
//         console.log("Недостаточно средств(((");
// }

const totalExpenses = 20000;
const payment = 100;
let discount = 0;
if (totalExpenses >= 100 && totalExpenses < 1000) {
    discount = 0.02;
    console.log('Бронзовый клиент, скидка 2%');
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
    discount = 0.05;
    console.log("Серебряный клиент, скидка 5%");
} else if (totalExpenses >= 5000) {
     discount = 0.1;
     console.log("Золотой клиент, скидка 10%");
} else {console.log("Проваливай, нищеброд!");
}
const finalPayment = payment - payment * discount;
console.log(`Оформляем заказ со скидкой ${discount * 100}%`);
console.log("К оплате с учетом скидки", finalPayment);