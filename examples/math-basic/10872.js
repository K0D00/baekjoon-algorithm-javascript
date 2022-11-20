// https://www.acmicpc.net/problem/10872

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

let count;

for (let i=0; i<=n; i++) {
  if (i === 0) {
    count = 1;
    continue;
  }
  count = count * i;
}

console.log(count);