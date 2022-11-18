// https://www.acmicpc.net/problem/2609

const str = require('fs').readFileSync('2609.txt').toString().trim().split(' ');
// const str = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function gcd(a, b) {
  if (b === 0) {
    n = a;
  } else {
    gcd(b, a%b);
  }
}

const [a, b] = str.map(ch => Number(ch));

let n = 1;
gcd(a, b);
const ncm = a * b / n;

console.log(n + '\n' + ncm);