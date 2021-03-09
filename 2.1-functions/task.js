'use strict';

// task #1

function getSolutions(a, b, c) {

    let D = b ** 2 - (4 * a * c);

    if (D < 0) {
        return { D: D, roots: [] };
    }

    else if (D === 0) {
        let x1 = -b / 2 * a;
        return { D: D, roots: [x1] };
    }

    else {
        let x1 = (-b + Math.sqrt(D)) / 2 * a;
        let x2 = (-b - Math.sqrt(D)) / 2 * a;
        return { D: D, roots: [x1, x2] }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`«Вычисляем корни квадратного уравнения: ${a}x² + ${b}x + ${c}»`);
    console.log(`«Значение дискриминанта: ${result.D}»`)

    if (result.D < 0) {
        console.log(`«Уравнение не имеет вещественных корней»`);
    }

    else if (result.D === 0) {
        console.log(`«Уравнение имеет один корень X₁ = ${result.roots[0]}»`);
    }

    else {
        console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`);
    }
}

showSolutionsMessage(2, 4, 2);

// task #2
/*
function getAverageScore() {
    let scores = {
        algebra: [2, 3, 4, 5],
        russian: [1, 2, 3, 4],
        french: [1, 2, 3, 4, 5],
        geometry: [1, 2, 3, 4, 5],
        physics: [1, 2, 3, 4, 5],
        music: [1, 2, 3, 4, 5],
        poetry: [1, 2, 3, 4, 5],
        english: [1, 2, 3, 4, 5],
        chemistry: [1, 2, 3, 4, 5],
    }

    for (let prop in scores) {
        let value = scores[prop];
        console.log(`Предмет ${prop}, оценки: ${value}`);
    }

    console.log(scores);
}
getAverageScore();
*/

// task #3
