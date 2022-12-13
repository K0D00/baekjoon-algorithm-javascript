// https://www.acmicpc.net/problem/11053

const [N, arr] = require('fs').readFileSync('11053.txt').toString().trim().split('\n');
// const [N, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +N;
const nums = arr.split(' ').map(ch => Number(ch));

const dp = [];

for (let i=0; i<n; i++) {
  const c = nums[i];

  dp[i] = 1;
  for (j=0; j<i; j++) {
    const d = nums[j];

    if (c > d) {
      dp[i] = Math.max(dp[i], dp[j]+1);
    }
  }
}

console.log(Math.max(...dp));