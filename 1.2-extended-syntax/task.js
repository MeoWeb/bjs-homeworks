function getResult(a, b, c) {
    'use strict';

    let result = [];
    let D = b ** 2 - 4 * a * c;

    if (D < 0)
        return result;

    if (D == 0) {
        result.push((-b + Math.sqrt(D)) / (2 * a));
        return result;
    }
    else if (D > 0) {

        result.push((-b + Math.sqrt(D)) / (2 * a));
        result.push((-b - Math.sqrt(D)) / (2 * a));
        return result;
    }
}


function getAverageMark(marks) {
    "use strict";

    let marksSum = marks.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    let averageMark = marksSum / marks.length;
    let newMarks = marks.slice(0, 5);
    let newMarksSum = newMarks.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    let newAverageMark = newMarksSum / newMarks.length;

    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log('Оценок больше 5-ти. Идет подсчет среднего значения первых 5-ти оценок.')
        return newAverageMark;
    } else {
        return averageMark;
    }
}

function askDrink(personName, dateOfBirthday) {

    let yearOfBirthday = dateOfBirthday;
    let now = new Date();

    let checkAgeYear = now.getFullYear() - yearOfBirthday.getFullYear();
    let checkAgeMonth = now.getMonth() - yearOfBirthday.getMonth();
    let checkAgeDate = now.getDate() - yearOfBirthday.getDate();

    if (checkAgeYear >= 19 || checkAgeYear == 18 && checkAgeMonth > 0) {
        return `Не желаете ли олд-фэшн, ${personName}?`;
    } else if (checkAgeYear == 18 && checkAgeMonth == 0 && checkAgeDate >= 0) {
        return `Не желаете ли олд-фэшн, ${personName}?`;
    } else {
        return `Сожалею, ${personName}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
}