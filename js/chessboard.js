export class Chessboard {

    _size = 0;
    /**
     * @var {HTMLElement} _element
     */
    _element;

    /**
     * @param {number} size The size of the board
     * @param {HTMLElement} element
     */
    constructor(size, element) {
        this._size = size;
        this._element = element;

        this._element.style.setProperty('--size', size);
    }

    /**
     * Draw the chessboard in the DOM
     */
    draw() {
        const charStart = 65;
        const cellContainer = document.createElement('div');
        const letterElement = document.createElement('div');
        const numbersElement = document.createElement('div');
        letterElement.classList.add('letters');
        numbersElement.classList.add('numbers');
        cellContainer.classList.add('cells-container');

        for (let i = charStart; i < charStart + this._size; i++) {
            const letter = document.createElement('span');
            letter.textContent = String.fromCharCode(i);
            letterElement.appendChild(letter);
        }

        for (let i = 1; i <= this._size; i++) {
            const number = document.createElement('span');
            number.textContent = i;
            numbersElement.appendChild(number);
        }

        this._drawCells(cellContainer);
        this._element.appendChild(numbersElement);
        this._element.appendChild(cellContainer);
        this._element.appendChild(letterElement);

    }

    /**
     * Fill cells with a position
     *
     * @param {number[]} position The position of the pawns
     */
    fill(position) {
        const cellSize = 75;
        const cellsContainer = this._element.querySelector('.cells-container');

        position.forEach((pos, i) => {
            const queen = document.createElement('img');
            queen.src = '../images/queen.png';
            queen.textContent = 'X';
            queen.classList.add('queen');

            queen.style.setProperty('--x', `${i * cellSize}px`);
            queen.style.setProperty('--y', `${pos * cellSize}px`);

            cellsContainer.appendChild(queen);
        });
    }

    _drawCells(element) {
        for (let i = 0; i < this._size; i++) {
            for (let j = 0; j < this._size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('board-cell', this._cellColor(i, j));

                element.appendChild(cell);
            }
        }
    }

    /**
     * @param {number} x
     * @param {number} y
     *
     * @returns {string}
     */
    _cellColor(x, y) {
        return (x + y) % 2 === 0 ? 'white' : 'black';
    }
}
