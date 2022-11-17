// https://www.acmicpc.net/problem/1935

const [_, str, ...arr] = require('fs').readFileSync('1935.txt').toString().trim().split('\n');
// const [_, str, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const stack = [];
const exe = str.split('');
const nums = arr.map(ch => Number(ch));

const isUpperChar = (ch) => /^[A-Z]/.test(ch);

for (let i=0; i<exe.length; i++) {
  const ch = exe[i];

  if (isUpperChar(ch)) {
    const chIndex = ch.charCodeAt(0) - 'A'.charCodeAt(0);
    stack.push(nums[chIndex]);
  } else {
    const b = stack.pop();
    const a = stack.pop();

    let c;
    if (ch === '+') {
      c = a + b;
    } else if (ch === '-') {
      c = a - b;
    } else if (ch === '*') {
      c = a * b;
    } else if (ch === '/') {
      c = a / b;
    }
    stack.push(c);
  }
}

console.log(stack[0].toFixed(2));