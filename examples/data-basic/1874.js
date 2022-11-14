// https://www.acmicpc.net/problem/1874

const input =  require('fs').readFileSync('1874.txt');
// const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  let logs = '';
  const rows = chunk.toString().trim().split('\n');
  const [max, ...stack] = rows;

  const memo = [];
  let index = 1;
  for (let i=1; i<=Number(max); i++) {
    const target = Number(stack[i-1]);

    while (index <= target) {
      logs += '+\n';
      memo.push(index);
      index++;
    }

    if (target === memo[memo.length - 1]) {
      logs += '-\n';
      memo.pop();
    } else {
      logs = 'NO';
      break;
    }
  }

  console.log(logs);
}

solution(input);