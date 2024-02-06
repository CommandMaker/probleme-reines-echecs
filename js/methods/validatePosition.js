/**
 *  Validate a queen problem solution
 *
 *  @param {number[]} position The position to validate
 *
 *  @returns {boolean}
 */
export const validatePosition = (position) => {
    if ([...new Set(position)].length !== position.length) return false;

    for (let i = 1; i <= position.length; i++) {
        for (let j = 1; j <= position.length; j++) {
            if (i !== j) {
                if (Math.abs((position[i-1] - position[j-1]) / (i - j)) === 1) return false;
            }
        }
    }

    return true;
}
