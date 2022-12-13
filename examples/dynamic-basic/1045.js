// https://www.acmicpc.net/problem/1045

const [N, K] = require('fs').readFileSync('1045.txt').toString().trim().split(' ');
// const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const dp = [];

const n = Number(N);
const k = Number(K);

for (let i=1; i<=k; i++) {
  dp[i] = new Array(n+1).fill(i === 1 ? 1 : 0);
  dp[i][0] = 1;
}

for (let i=2; i<=k; i++) {
  for (let j=1; j<=n; j++) {
    dp[i][j] = dp[i-1].slice(0, j+1).reduce((acc, cur) => acc + cur, 0) % 1000000000;
  }
}

console.log(dp[k][n]);