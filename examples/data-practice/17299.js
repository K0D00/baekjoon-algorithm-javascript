// https://www.acmicpc.net/problem/17299

const input = require('fs').readFileSync('17299.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const logs = [];
const stack = [];
const freq = {};
const arr = input[1].split(' ')

for (let j=0; j<arr.length; j++) {
  arr[j] = Number(arr[j]);
  freq[arr[j]] = freq[arr[j]] ? freq[arr[j]] + 1 : 1;
}

stack.push(0);
for (let i=1; i<arr.length; i++) {
  while (stack.length > 0 && freq[arr[stack[stack.length-1]]] < freq[arr[i]]) {
    logs[stack.pop()] = arr[i];
  }
  stack.push(i)
}

while (stack.length > 0) {
  logs[stack.pop()] = -1;
}

console.log(logs.join(' '));
