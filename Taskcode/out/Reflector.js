"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
class Platform {
    constructor(input) {
        this.rows = input.map(row => row.split(''));
    }
    tiltNorth() {
        for (let col = 0; col < this.rows[0].length; col++) {
            for (let row = 1; row < this.rows.length; row++) {
                if (this.rows[row][col] === 'O') {
                    for (let k = row; k > 0; k--) {
                        if (this.rows[k - 1][col] === '.') {
                            [this.rows[k][col], this.rows[k - 1][col]] = [this.rows[k - 1][col], this.rows[k][col]];
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
    }
    calculateTotalLoad() {
        let totalLoad = 0;
        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j < this.rows[i].length; j++) {
                if (this.rows[i][j] === 'O') {
                    totalLoad += this.rows.length - i;
                }
            }
        }
        return totalLoad;
    }
    calculateTotalLoadOnNorth() {
        const totalLoadOnNorth = this.rows.length * (this.rows.length + 1) / 2;
        return totalLoadOnNorth;
    }
}
function getUserInput() {
    console.log("Enter the arrangement of rocks on the platform (O for rounded rocks, # for cube-shaped rocks, and . for empty spaces):");
    const numRows = parseInt(readlineSync.question("Enter the number of rows: "));
    const platform = [];
    for (let i = 0; i < numRows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `).trim();
        platform.push(rowInput);
    }
    return platform;
}
const userInput = getUserInput();
const platform = new Platform(userInput);
platform.tiltNorth();
const totalLoad = platform.calculateTotalLoad();
console.log("Total Load:", totalLoad);
const totalLoadOnNorth = platform.calculateTotalLoadOnNorth();
console.log("Total Load on North Support Beams:", totalLoadOnNorth);
readlineSync.question('Press Enter to exit...');
