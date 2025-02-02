import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Reads and trims the contents of a file.
 * This is a utility function designed to be used across all AoC problems.
 * 
 * @param {string} filename - The name of the file to read (default: 'input.txt')
 * @param {string} dir - The directory containing the file (default: directory of calling module)
 * @returns {string} The contents of the file as a trimmed string
 * 
 * @example
 * // From a solution file:
 * const input = readInput('input.txt', __dirname);
 */
export function readInput({filename = 'input.txt', dir = getDirname()}) {
    return fs.readFileSync(path.join(dir, filename), 'utf8').trim();
}

/**
 * Gets the directory name of the calling module.
 * This is a helper function used internally by readInput.
 * 
 * @returns {string} The directory path of the calling module
 * @internal
 */
export function getDirname() {
    const filename = fileURLToPath(import.meta.url);
    return path.dirname(filename);
}
