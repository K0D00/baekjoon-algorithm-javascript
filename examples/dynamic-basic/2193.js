// https://www.acmicpc.net/problem/2193

const N = require('fs').readFileSync('2193.txt').toString().trim();
// const N = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(N);
const memo = new Array(n+1);

memo[0] = 0;
memo[1] = 1;
memo[2] = 1;

for (let i=3; i<=n; i++) {
  memo[i] = BigInt(memo[i-1]) + BigInt(memo[i-2]);
}

console.log(BigInt(memo[n]).toString());