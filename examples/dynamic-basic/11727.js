// https://www.acmicpc.net/problem/11727

const input = require('fs').readFileSync('11727.txt').toString().trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const dn = [];

dn[0] = 1;
dn[1] = 1;

for (let i=2; i<=n; i++) {
  dn[i] = dn[i-1] + (dn[i-2] * 2);
  dn[i] %= 10007
}

console.log(dn[n]);