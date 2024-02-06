import { validatePosition } from './validatePosition.js';

export const bruteforce = (arr) => {
    const result = [];

    function cartesianProductHelper(current, depth) {
        if (depth === arr.length) {
            if (validatePosition([...current])) {
                result.push([...current]);
            }

            return;
        }

        for (const item of arr) {
            current.push(item);
            cartesianProductHelper(current, depth + 1);
            current.pop();
        }
    }

    cartesianProductHelper([], 0);
    return result;
}
