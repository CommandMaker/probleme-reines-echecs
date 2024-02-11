if (!window.location.href.slice(0, -1).endsWith('/aleatoire') &&
    !window.location.href.endsWith('/aleatoire')) throw new Error('Not aleatoire page ! Abort loading of demo');

import { generatePosition } from '../methods/aleatoire.js';
import { Chessboard } from '../chessboard.js';

/**
 * @var {{[key: number]: number}}
 */
const solutionsNumber = {
    1: 1,
    2: 0,
    3: 0,
    4: 2,
    5: 10,
    6: 4,
    7: 40,
    8: 92,
    9: 352,
    10: 724
};

const numberInput = document.querySelector('input#number');
const generateButton = document.querySelector('button#generate');
const resultBox = document.querySelector('.result-box');

generateButton.onclick = () => {
    resultBox.textContent = '';

    if (numberInput.value === '') return;

    resultBox.style.setProperty('--max-size', `${75 * +numberInput.value + 50}px`);

    (async () => {
        if (solutionsNumber[+numberInput.value] === undefined) return;

        let a = 0;
        const solutions = [];

        console.log('Generating solutions');

        const startTime = Date.now();

        while (a < solutionsNumber[+numberInput.value]) {
            const position = generatePosition(+numberInput.value);

            if (!solutions.includes(position)) {
                solutions.push(position);
                a++;
            }
        }

        const endTime = Date.now() - startTime;

        console.log('Rendering solutions');

        const attempts = solutions.reduce((acc, val) => acc + val.attempts, 0);

        document.querySelector('p#ellapsedTime').textContent = `${solutions.length.toLocaleString()} solutions trouvées en ${endTime * 10**-3} secondes et en ${attempts.toLocaleString()} essais`;

        solutions.forEach(solution => {
            const chessboardElement = document.createElement('div');
            chessboardElement.classList.add('board');

            const chessboard = new Chessboard(+numberInput.value, chessboardElement);
            chessboard.draw();
            chessboard.fill(solution.position);

            resultBox.appendChild(chessboardElement);
        });
    })();
};
