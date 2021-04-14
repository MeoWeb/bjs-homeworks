'use sctrict';

// задача №1
//String.prototype.isPalindrome

String.prototype.isPalindrome = function isPalindrome(str) {
    str = this;
    str = str.toLowerCase().replace(/\s/g, '');

    return str === str.split('').reverse().join('');
}



function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + +marks[i];
    }
    let average = sum / marks.length;
    let averageMark = Math.round(average);
    if (!marks.length) {
        return 0;
    } else
        return averageMark;
}


function checkBirthday(birthday) {
    const now = new Date().getTime();
    const birthdayMSeconds = new Date(birthday).getTime();
    let difference = now - birthdayMSeconds;
    let age = difference / 24 / 60 / 60 / 1000 / 365;

    if (age > 18) {
        return age;
    }
}
