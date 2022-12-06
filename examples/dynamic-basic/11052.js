// https://www.acmicpc.net/problem/11052

const [N, cards] = require('fs').readFileSync('11052.txt').toString().trim().split('\n');
// const [N, cards] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(N);
const cns = cards.split(' ').map(ch => Number(ch));
const dp = (new Array(n+1)).fill(0);

for (let i=1; i<=n; i++) {
  for (let j=1; j<=i; j++) {
    dp[i] = Math.max(dp[i], dp[i-j] + cns[j-1]);
  }
}

console.log(dp[n]);