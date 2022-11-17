// https://www.acmicpc.net/problem/11656

const inputs = require('fs').readFileSync('11656.txt').toString().trim().split('');
// const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const strSet = [];
const ln = inputs.length;

for (let i=0; i<ln; i++) {
  strSet.push(inputs.join(''));
  inputs.shift();
}

console.log(strSet.sort().join('\n'));