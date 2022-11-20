// https://www.acmicpc.net/problem/1676

const input = require('fs').readFileSync('1676.txt').toString().trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
const a = Math.floor(n/5);
const b = Math.floor(n/25);
const c = Math.floor(n/125);

console.log(a + b + c);