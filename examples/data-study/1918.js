// https://www.acmicpc.net/problem/1918

const str = require('fs').readFileSync('1918.txt').toString().trim();
// const str = require('fs').readFileSync('/dev/stdin').toString().trim();

const exe = str.split('');

const stack = [];
const logs = [];

for (let i=0; i<exe.length; i++) {
  const ch = exe[i];

  if (ch === '(') {
    stack.push(ch);
  } else if (ch === ')') {
    while (stack.length > 0 && stack[stack.length-1] !== '(') {
      logs.push(stack.pop());
    }
    stack.pop();
  } else if (ch === '*' || ch === '/') {
    while (stack.length > 0 && stack[stack.length-1] === '*' || stack[stack.length-1] === '/') {
      logs.push(stack.pop());
    }
    stack.push(ch);
  } else if (ch === '+' || ch === '-') {
    while (stack.length > 0 && stack[stack.length-1] !== '(') {
      logs.push(stack.pop());
    }
    stack.push(ch);
  } else {
    logs.push(ch);
  }
}

while (stack.length > 0) {
  logs.push(stack.pop());
}

console.log(logs.join(''));