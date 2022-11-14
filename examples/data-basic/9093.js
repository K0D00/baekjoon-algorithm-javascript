// https://www.acmicpc.net/problem/9093

// const input =  require('fs').readFileSync('9093.txt');
const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const rows = chunk.toString().trim().split('\n');

  let logs = '';
  for (let i=1; i<rows.length; i++) {
    const log = rows[i].split(' ').map(str => [...str].reverse().join('')).join(' ');
    logs += `${log}\n`;
  }

  console.log(logs);
}

solution(input);