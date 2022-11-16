// https://www.acmicpc.net/problem/17298

const input =  require('fs').readFileSync('17298.txt');
// const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const [_, a] = chunk.toString().trim().split('\n');
  const arr = a.split(' ').map(ch => Number(ch));

  let logs = '';
  const stack = [];
  stack.push(0);
  for (let i=0; i<arr.length; i++) {
    while (stack.length > 0) {
      const top = stack[stack.length - 1];
    }
  }
  console.log(logs);
}

solution(input);