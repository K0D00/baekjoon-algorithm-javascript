// https://www.acmicpc.net/problem/2004

const [a, b] = require('fs').readFileSync('2004.txt').toString().trim().split(' ');
// const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const n = Number(a);
const m = Number(b);

let two = 0;
let five = 0;

for (let i=2; i<=n; i*=2) {
  two += Math.floor(n/i);
}
for (let i=2; i<=n-m; i*=2) {
  two -= Math.floor((n-m)/i);
}
for (let i=2; i<=m; i*=2) {
  two -= Math.floor(m/i);
}

for (let i=5; i<=n; i*=5) {
  five += Math.floor(n/i);
}
for (let i=5; i<=n-m; i*=5) {
  five -= Math.floor((n-m)/i);
}
for (let i=5; i<=m; i*=5) {
  five -= Math.floor(m/i);
}

console.log(Math.min(two, five));