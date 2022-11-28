// https://www.acmicpc.net/problem/1463

const input = require('fs').readFileSync('1463.txt').toString().trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const dn = [];

function go(n) {
  if (n === 1) return 0;
  if (dn[n] > 0) return dn[n];
  dn[n] = go(n-1) + 1;
  if (n%2 === 0) {
    let temp = go(n/2) + 1;
    if(dn[n] > temp) dn[n] = n;
  }
  if (n%3 === 0) {
    let temp = go(n/3) + 1;
    if(dn[n] > temp) dn[n] = n;
  }
  return dn[n];
}

dn[1] = 0;

for (let i=2; i<=n; i++) {
  dn[i] = dn[i-1] + 1;
  if (i%2 === 0 && dn[i] > dn[i/2] + 1) {
    dn[i] = dn[i/2] + 1;
  }
  if (i%3 === 0 && dn[i] > dn[i/3] + 1) {
    dn[i] = dn[i/3] + 1;
  }
}

console.log(go(n));