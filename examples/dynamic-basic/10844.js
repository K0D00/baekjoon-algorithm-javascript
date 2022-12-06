// https://www.acmicpc.net/problem/10844

const N = require('fs').readFileSync('10844.txt').toString().trim();
// const N = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(N);
const dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
const MOD = 1000000000;

for (let i=0; i<n; i++) {
  dp.push([...Array(10)])
}

for (let i=1; i<n; i++) {
  for (let j=0; j <= 9; j++) {
    dp[i][j] = ((dp[i-1][j-1] || 0) + (dp[i-1][j+1] || 0)) % MOD;
  }
}

const result = dp[n-1].reduce((acc, i) => {
  return (acc + i) % MOD;
}, 0)

console.log(result);