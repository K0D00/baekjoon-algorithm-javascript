// https://www.acmicpc.net/problem/6588

const input = require('fs').readFileSync('6588.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const logs = [];

const nums = input.map(ch => Number(ch));

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

nums.forEach(n => {
  if (n !== 0) {
    for (let i=0; i<pn; i++) {
      if (!check[n - prime[i]]) {
        logs.push(`${n} = ${prime[i]} + ${n - prime[i]}`);
        break;
      }
    }
  }
})

console.log(logs.join('\n'));