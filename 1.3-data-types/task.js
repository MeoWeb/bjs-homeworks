'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

    console.log('percent ' + typeof percent);
    console.log('contribution ' + typeof contribution);
    console.log('amount ' + typeof amount);

    Percent = Number(percent);
    Contribution = Number(contribution);
    Amount = Number(amount);

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
    let newName;
    if (typeof name == 'undefined' || !name.length) {
        newName = 'Аноним';
    } else {
        newName = name;
    }
    return `Привет, мир! Меня зовут ${newName}.`;
}