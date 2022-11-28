// https://www.acmicpc.net/problem/1153

const input = require('fs').readFileSync('1153.txt').toString().trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const logs = [];

const num = Number(input);

const MAX = 1000000;
const check = [];
const prime = [];
let pn = 0;

for (let i=2; i<=MAX; i++) {
  if (i < 2) {
    continue;
  }
  if (!check[i]) {
    prime[pn++] = i;

    for (let j=i+i; j<=MAX; j+=i) {
      check[j] = true;
    }
  }
}

if (num !== 0) {
  for (let i=0; i<pn; i++) {
    if (!check[num - prime[i]]) {
      logs.push(`${prime[i]} + ${n - prime[i]}`);
      break;
    }
  }
}


console.log(logs.join('\n'));