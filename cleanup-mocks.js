const fs = require('fs');

const dataRaw = fs.readFileSync('public/data.json', 'utf8');
const data = JSON.parse(dataRaw);

delete data.certDetails['eCCPT'];
delete data.certDetails['eWPT'];
delete data.certDetails['eJPT'];

fs.writeFileSync('public/data.json', JSON.stringify(data, null, 4));
console.log("Mock data removed from data.json!");
