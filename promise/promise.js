/** promises in javascript */

// function readFile(fileName, enc) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, enc, (err, data) => {
//             if (err) reject(err);
//             else resolve(data);
//         });
//     });
// }

const fs = require('fs');

function readFile(fileName, enc) {
    // callback function
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, enc, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

// Test function
async function testReadFile() {
    const fileName = 'test.txt';
    const enc = 'utf8';
    try {
        const data = await readFile(fileName, enc);
        console.log('Data read from file:', data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

testReadFile();