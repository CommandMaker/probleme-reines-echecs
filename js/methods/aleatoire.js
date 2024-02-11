import { validatePosition } from './validatePosition.js';

/**
 * Generate a single random position (valid or not)
 *
 * @param {number} n The number of queens to generate
 * @returns {number[]} The generated position
 */
export const dameAlea = (n) => {
    return Array(n).fill(0).map(_ => {
        return Math.floor(Math.random() * (n)) + 0
    });
}

/**
 * @param {number} n The number of queens to generate
 *
 * @returns {{position: number[], attempts: number}} Returns the position and the number of attemps to generate it
 */
export const generatePosition = (n) => {
    let soluce = Array(n).fill(0);
    let i = 0;

    while (true) {
        if (validatePosition(soluce)) break;

        soluce = dameAlea(n);
        i++;
    }

    return { position: soluce, attempts: i };
}
