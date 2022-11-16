// https://www.acmicpc.net/problem/10799

const input =  require('fs').readFileSync('10799.txt');
// const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const str = chunk.toString().trim();
  const stack = [];

  let count = 0;

  for (let i=0; i<str.length; i++) {
    const ch = str[i];

    if (ch === '(') {
      stack.push(ch);
    } else {
      if (str[i-1] === '(') {
        stack.pop();
        count += stack.length;
      } else {
        stack.pop();
        count += 1;
      }
    }
  }

  console.log(count);
}

solution(input);