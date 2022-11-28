// https://www.acmicpc.net/problem/9095

let [n, ...arr] = require('fs').readFileSync('9095.txt').toString().trim().split('\n').map(Number);
// let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const dn = [];

for (let i=1; i<=10; i++) {
  dn[i] = 0;
}

dn[0] = 1;

for (let i=1; i<=10; i++) {
  for (let j=1; j<=3; j++) {
    if (i-j >= 0) {
      dn[i] += dn[i-j];
    }
  }
}

while (n--) {
  console.log(dn[arr.shift()])
}