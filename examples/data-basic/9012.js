// https://www.acmicpc.net/problem/9012

// const input =  require('fs').readFileSync('9012.txt');
const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const rows = chunk.toString().trim().split('\n');

  const logs = [];
  for (let i=1; i<rows.length; i++) {
    const row = rows[i];
    const stack = [];

    for (let j=0; j<row.length; j++) {
      const ch = row[j];

      if (ch === '(') {
        stack.push(ch);
      } else {
        if (stack.length === 0) {
          stack.push(ch);
          break;
        }
        stack.pop();
      }
    }

    if (stack.length > 0) {
      logs.push('NO');
    } else {
      logs.push('YES');
    }
  }

  console.log(logs.join('\n'));
}

solution(input);