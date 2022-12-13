// https://www.acmicpc.net/problem/1699

const input = require('fs').readFileSync('1699.txt').toString().trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const dp = [];

for (let i=0; i<=n; i++) {
  dp[i] = i;
}

for (let i=2; i<=n; i++) {
  for (let j=2; j*j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
  }
}

console.log(dp[n]);