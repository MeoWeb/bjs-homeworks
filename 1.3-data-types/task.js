'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {



    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    percent = percent / 100;

    console.log(percent);
    console.log(contribution);
    console.log(amount);


    if (percent.isNan || contribution.isNan || amount.isNan ||
        percent <= 0 || contribution < 0 || amount <= 0) {
        return 'Ошибка';
    }

    let S = amount - contribution;;
    let today = new Date();

    let checkDateYear = date.getFullYear() - today.getFullYear();
    let checkDateMonth = date.getMonth() - today.getMonth();

    if (checkDateYear < 0) {
        return 'Ошибка';
    }

    let numberOfMonths = checkDateMonth + (checkDateYear * 12);
    let P = percent * (1 / 12);

    let monthAmount = S * (P + P / (((1 + P) ** numberOfMonths) - 1));
    let totalAmount = monthAmount * numberOfMonths;

    console.log(totalAmount);
    return Number(totalAmount.toFixed(2));
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