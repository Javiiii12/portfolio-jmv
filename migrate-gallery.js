const fs = require('fs');

const dataRaw = fs.readFileSync('public/data.json', 'utf8');
const data = JSON.parse(dataRaw);

data.writeupDetails["echo-response"].gallery = [
    "images/echo-badge.png",
    "images/echo-leaderboard.png",
    "images/echo-progress-1.png",
    "images/echo-progress-2.png"
];

fs.writeFileSync('public/data.json', JSON.stringify(data, null, 4));
console.log("Gallery re-injected.");
