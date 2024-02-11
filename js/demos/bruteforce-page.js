if (!window.location.href.slice(0, -1).endsWith('/bruteforce') &&
    !window.location.href.endsWith('/bruteforce')) throw new Error('Not bruteforce page ! Abort loading of demo');


import { bruteforce } from '../methods/bruteforce.js';
import { Chessboard } from '../chessboard.js';

const numberInput = document.querySelector('input#number');
const generateButton = document.querySelector('button#generate');
const resultBox = document.querySelector('.result-box');

generateButton.onclick = () => {
    resultBox.textContent = '';

    if (numberInput.value === '') return;

    resultBox.style.setProperty('--max-size', `${75 * +numberInput.value + 50}px`);

    (async () => {
        const startTime = Date.now();

        const solutions = bruteforce(Array.from(Array(+numberInput.value).keys()));

        const endTime = (Date.now() - startTime) * 10 ** -3;
        document.querySelector('p#ellapsedTime').textContent = `${solutions.length.toLocaleString()} solutions trouvées en ${endTime.toLocaleString()} secondes`;

        solutions.forEach(soluce => {
            const board = document.createElement('div');
            board.classList.add('board');

            const chessboard = new Chessboard(+numberInput.value, board);
            chessboard.draw();
            chessboard.fill(soluce);

            resultBox.appendChild(board);
        });
    })();
}
