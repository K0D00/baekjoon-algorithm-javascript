// https://www.acmicpc.net/problem/1929

const [a, b] = require('fs').readFileSync('1929.txt').toString().trim().split(' ');
// const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const check = [];
const prime = [];
let pn = 0;

const start = Number(a);
const n = Number(b);

for (let i=2; i<=n; i++) {
  if (i < 2) {
    continue;
  }
  if (!check[i]) {
    prime[pn++] = i;

    for (let j=i+i; j<=n; j+=i) {
      check[j] = true;
    }
  }
}

const answer = prime.filter(num => {
  return num >= start;
});

console.log(answer.join('\n'));