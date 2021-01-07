const fs = require('fs');
const dayjs = require('dayjs')
const { execSync } = require('child_process');

var versionsFIlePath='./src/config/';
let data = fs.readFileSync(`${versionsFIlePath}versions.js`, "utf8");
let json=data.replace('export default ','');
let jsonData=JSON.parse(json)
let tag=execSync('git describe --abbrev=0').toString().trim() || '0.0';

console.log('in json',jsonData)
jsonData.versions=dayjs().format('YYMMDDHHmm')
jsonData.header=`v${tag}.`

let toJsonStr='export default '+JSON.stringify(jsonData)
// console.log(JSON.parse(json))
console.log('out json',jsonData)
fs.writeFileSync(`${versionsFIlePath}versions.js`, toJsonStr);
