import path from 'path';
import { fileURLToPath } from 'url';
import { readInput } from '../../utils/read-input.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseInput(input) {
    return input.split('\n').map(line => line.trim())
}

function solvePart1(input) {
    const lines = parseInput(input);

    const calibrationValues = lines.map(line => {
        let firstDigit = null
        let lastDigit = null;

        // Loop through each character in the line
        for (let i = 0; i < line.length; i++) {
            // If the character is a digit, check if it's the first or last digit
            if (line[i] >= '0' && line[i] <= '9') {
                if (firstDigit === null) {
                    firstDigit = line[i];
                }
                lastDigit = line[i];
            }
        }

        return parseInt(`${firstDigit}${lastDigit}`)
    })
    return calibrationValues.reduce((sum, value) => sum + value, 0)
}

function solvePart2(input) {
    const lines = parseInput(input);

    // Map of words to their corresponding digits
    const words = {
        'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'
    }

    const calibrationValues = lines.map(line => {
        let firstDigit = null;
        let lastDigit = null;

        // Loop through each character in the line
        for (let i = 0; i < line.length; i++) {
            // If the character is a digit, check if it's the first or last digit
            if (line[i] >= '0' && line[i] <= '9') {
                if (firstDigit === null) {

                    firstDigit = line[i];
                }
                lastDigit = line[i];
                continue;
            }

            // Check if the current character is a word
            for (const [word, digit] of Object.entries(words)) {
                if (line.slice(i).startsWith(word)) {
                    if (firstDigit === null) {
                        firstDigit = digit;
                    }
                    lastDigit = digit;
                    break;
                }
            }
        }
        return parseInt(`${firstDigit}${lastDigit}`)
    })
    return calibrationValues.reduce((sum, value) => sum + value, 0)
}

function main() {
    const input = readInput({dir: __dirname});

    console.log('Part 1:', solvePart1(input));
    console.log('Part 2:', solvePart2(input));
}

main();
