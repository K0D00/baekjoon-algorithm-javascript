// https://www.acmicpc.net/problem/1912

const [N, arr] = require('fs').readFileSync('1912.txt').toString().trim().split('\n');
// const [N, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(N);
const nums = arr.split(' ').map(ch => Number(ch));
const dp = [];
dp[0] = nums[0];

for (let i=1; i<n; i++) {
  dp[i] = nums[i] > nums[i] + dp[i-1] ? nums[i] : nums[i] + dp[i-1];
}
console.log(Math.max(...dp));