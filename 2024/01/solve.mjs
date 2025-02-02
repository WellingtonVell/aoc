import path from 'path';
import { fileURLToPath } from 'url';
import { readInput } from '../../utils/read-input.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseInput(input) {
    const leftList = [];
    const rightList = [];
    
    // For each line in our input, we split it into two numbers
    input.split('\n').forEach(line => {
       const [left, right] = line.trim().split(/\s+/).map(Number);
        leftList.push(left);
        rightList.push(right);
    });

    return { leftList, rightList };
}

function solvePart1(input) {
    const { leftList, rightList } = parseInput(input);
    
    // Make copies of our lists and sort them from smallest to biggest
    const sortedLeft = [...leftList].sort((a, b) => a - b);
    const sortedRight = [...rightList].sort((a, b) => a - b);
    
    let totalDistance = 0;
    
    // Look at each pair of numbers and find how far apart they are
    for (let i = 0; i < sortedLeft.length; i++) {
        const distance = Math.abs(sortedLeft[i] - sortedRight[i]);
        totalDistance += distance;
    }
    
    return totalDistance;
}

function solvePart2(input) {
   const { leftList, rightList } = parseInput(input);

    // Count how many times each number appears in the left list
    const leftListCount = leftList.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    let similarityScore = 0;

    // For each number in the right list
    for (const num of rightList) {
        // If we have this number in our left list count
        if (leftListCount[num]) {
            // Multiply the number by how many times we saw it
            similarityScore += num * leftListCount[num];
        }
    }
    return similarityScore;
}

function main() {
    const input = readInput({dir: __dirname});
    
    console.log('Part 1:', solvePart1(input));
    console.log('Part 2:', solvePart2(input));
}

main();
