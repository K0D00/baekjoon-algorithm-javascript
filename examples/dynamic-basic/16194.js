// https://www.acmicpc.net/problem/16194

const [N, cards] = require('fs').readFileSync('16194.txt').toString().trim().split('\n');
// const [N, cards] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(N);
const cns = cards.split(' ').map(ch => Number(ch));
const dp = [0, ...cns];

for (let i=1; i<=n; i++) {
  for (let j=1; j<=i; j++) {
    dp[i] = Math.min(dp[i], dp[i-j] + dp[j]);
  }
}

console.log(dp[n]);