// https://www.acmicpc.net/problem/1934

const [n, ...str] = require('fs').readFileSync('1934.txt').toString().trim().split('\n');
// const [n, ...str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const logs = [];

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a%b);
  }
}

for (let i=0; i<Number(n); i++) {
  const [a, b] = str[i].split(' ').map(ch => Number(ch));

  const g = gcd(a, b);
  logs.push(a*b/g);
}

console.log(logs.join('\n'));