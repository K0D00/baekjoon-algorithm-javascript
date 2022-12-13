// https://www.acmicpc.net/problem/14494

const [A, B] = require('fs').readFileSync('14494.txt').toString().trim().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');


const a = Number(A);
const b = Number(B);
const MOD = 1000000007;

const dp = Array.from({ length: a + 1 }, () => new Array(b + 1).fill(0));

for (let i=1; i<=a; i++) {
  for (let j=1; j<=b; j++) {
    if (i===1 && j===1) {
      dp[i][j] = 1;
      continue;
    }
    dp[i][j] = ((dp[i][j-1] || 0) + (dp[i-1][j] || 0) + (dp[i-1][j-1] || 0)) % MOD;
  }
}

console.log(dp[a][b])