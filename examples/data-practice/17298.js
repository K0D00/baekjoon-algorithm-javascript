// https://www.acmicpc.net/problem/17298

const input = require('fs').readFileSync('17298.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const logs = [];
const stack = [];
const arr = input[1].split(' ')

for (let j=0; j<arr.length; j++) {
  arr[j] = Number(arr[j]);
}

stack.push(0);
for (let i=1; i<arr.length; i++) {
  while (stack.length > 0 && arr[stack[stack.length-1]] < arr[i]) {
    logs[stack.pop()] = arr[i];
  }
  stack.push(i)
}

while (stack.length > 0) {
  logs[stack.pop()] = -1;
}

console.log(logs.join(' '));
