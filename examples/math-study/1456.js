const [a, b] = require('fs').readFileSync('1456.txt').toString().trim().split(' ');
// const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const n = Number(a);
const m = Number(b);

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

const almostPrime = [];
const check = [];


for (let i=2; i*i<=m; i++) {
  if (isPrimeNum(i)) {
    for (let j=i*i; j<=m; j*=i) {
      if (j < n || check[j]) {
        continue;
      }
      almostPrime.push(j);
      check[j] = true;
    }
  }
}

console.log(almostPrime.length);