// https://www.acmicpc.net/problem/1978

const [n, str] = require('fs').readFileSync('1978.txt').toString().trim().split('\n');
// const [n, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = str.split(' ').map(ch => Number(ch));

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

let count = 0;
nums.forEach(num => {
  if (isPrimeNum(num)) {
    count += 1;
  }
})

console.log(count);