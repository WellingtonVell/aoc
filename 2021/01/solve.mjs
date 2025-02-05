import path from 'path';
import { fileURLToPath } from 'url';
import { readInput } from '../../utils/read-input.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseInput(input) {
    return input.split('\n').map(Number);
}

function solvePart1(input) {
    const numbers = parseInput(input);
    let count = 0;
    // Compare each number to the previous one
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            count++;
        }
    }
    return count;
}

function solvePart2(input) {
    const numbers = parseInput(input);
    let count = 0;
    // Calculate the sum of each three-measurement window
    for (let i = 0; i < numbers.length - 3; i++) {
        // For each window, compare the sum of the current window to the sum of the previous window
        const sum1 = numbers[i] + numbers[i + 1] + numbers[i + 2];
        const sum2 = numbers[i + 1] + numbers[i + 2] + numbers[i + 3];
        if (sum2 > sum1) {
            count++;
        }
    }
    return count;
}

function main() {
    const input = readInput({dir: __dirname});
    
    console.log('Part 1:', solvePart1(input));
    console.log('Part 2:', solvePart2(input));
}

main();
