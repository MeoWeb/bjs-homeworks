function getResult(a, b, c) {
    'use strict';

    let result = [];
    let D = b ** 2 - 4 * a * c;

    if (D < 0)
        return result;

    if (D == 0) {
        result = (-b + Math.sqrt(D)) / (2 * a);
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

    if (marks.length > 0 && marks.length < 6) {
        return averageMark;
    } else if (marks.length > 5) {
        let lastMarks = marks.slice(-5);
        let lastMarksSum = lastMarks.reduce(function (sum, current) {
            return sum + current;
        }, 0);
        let newAverageMark = lastMarksSum / lastMarks.length;
        console.log('Оценок больше 5-ти. Идет подсчет среднего значения последних 5-ти оценок.')
        return newAverageMark;
    }
    else {
        return 0;
    }

}





function askDrink(personName, dateOfBirthday) {

    let newDate = dateOfBirthday.getFullYear();
    if (newDate <= 2001) {
        return `Не желаете ли олд-фэшн, ${personName}?`;
    }
    else {
        return `Сожалею, ${personName}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
}
