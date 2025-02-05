import path from 'path';
import { fileURLToPath } from 'url';
import { readInput } from '../../utils/read-input.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseInput(input) {
    return input.split('\n').map(line => line.trim())
}

function solvePart1(input) {
    const parsedInput = parseInput(input);
    // Split the input into groups of elves
    const elves = parsedInput.reduce((acc, line) => {
        // If the line is empty, add a new elf to the array
        if (line === '') {
            acc.push(0);
            return acc;
        }
        // Add the calories to the last elf's total
        acc[acc.length - 1] += parseInt(line);
        return acc;
    }, [0]);
    // Return the elf with the most calories
    return Math.max(...elves);
}


function solvePart2(input) {
    const parsedInput = parseInput(input);
    // Split the input into groups of elves
    const elves = parsedInput.reduce((acc, line) => {
        // If the line is empty, add a new elf to the array
        if (line === '') {
            acc.push(0);

            return acc;
        }
        // Add the calories to the last elf's total
        acc[acc.length - 1] += parseInt(line);
        return acc;
    }, [0]);
    // Sort the elves by calories in descending order

    elves.sort((a, b) => b - a);
    // Return the sum of the top 3 elves
    return elves.slice(0, 3).reduce((sum, value) => sum + value, 0);
}


function main() {
    const input = readInput({dir: __dirname});

    console.log('Part 1:', solvePart1(input));
    console.log('Part 2:', solvePart2(input));
}

main();

