'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);

    percent = percent / 100;

    let S = amount - contribution;;
    let today = new Date();

    let checkDateYear = date.getFullYear() - today.getFullYear();
    let checkDateMonth = date.getMonth() - today.getMonth();

    let numberOfMonths = checkDateMonth + (checkDateYear * 12);
    let P = percent * (1 / 12);

    let monthAmount = S * (P + P / (((1 + P) ** numberOfMonths) - 1));
    let totalAmount = monthAmount * numberOfMonths;

    console.log(totalAmount);
    return totalAmount.toFixed(2);
}

function getGreeting(name) {

    if (name === '') {
        return `Привет, мир! Меня зовут Аноним.`;
    } else {
        return `Привет, мир! Меня зовут ${name}.`;
    }
}

