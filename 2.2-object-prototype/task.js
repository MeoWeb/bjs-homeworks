'use sctrict';

//String.prototype.isPalindrome - для задачи №1

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + +marks[i];
    }
    let average = sum / marks.length;
    let averageMark = Math.round(average);
    if (marks.length == "") {
        return 0;
    } else
        return averageMark;
}


function checkBirthday(birthday) {
    let now = new Date();
    birthday = new Date(birthday);
    let difference = now - birthday;
    let millisecondsYear = 24 * 60 * 60 * 1000 * 365;
    let age = difference / millisecondsYear;

    return (age > 18);
}