// https://www.acmicpc.net/problem/1929

const [a, b] = require('fs').readFileSync('1929.txt').toString().trim().split(' ');
// const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const logs = [];

function isPrimeNum(n) {
  if (n < 2) {
    return false;
  }
  for (let i=2; i*i<=n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i=Number(a); i<=Number(b); i++) {
  if (isPrimeNum(i)) {
    logs.push(i);
  }
}

console.log(logs.join('\n'));