// https://www.acmicpc.net/problem/14002

const [N, arr] = require('fs').readFileSync('14002.txt').toString().trim().split('\n');
// const [N, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +N;
const nums = arr.split(' ').map(ch => Number(ch));

const dp = [];
const ms = [];

for (let i=0; i<n; i++) {
  const c = nums[i];

  dp[i] = 1;
  let maxIndex = -1;
  for (j=0; j<i; j++) {
    const d = nums[j];

    if (c > d) {
      if (dp[i] < dp[j] + 1) {
        maxIndex = j;
      }
      dp[i] = Math.max(dp[i], dp[j]+1);
    }
  }
  ms[i] = maxIndex > -1 ? ms[maxIndex].concat(nums[i]) : [nums[i]];
}

const max = Math.max(...dp);

console.log(max);
console.log(ms[dp.indexOf(max)].join(' '));