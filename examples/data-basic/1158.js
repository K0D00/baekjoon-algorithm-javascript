// https://www.acmicpc.net/problem/1158

const input = require('fs').readFileSync('1158.txt');
// const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const [n, k] = chunk.toString().trim().split(' ');
  const queue = Array.from(Array(Number(n)), (_, i) => i + 1);

  let logs = '<';
  while (queue.length > 0) {
    for (let i=1; i<Number(k); i++) {
      queue.push(queue.shift());
    }
    logs += (queue.length === 1 ? queue.shift() : `${queue.shift()}, `);
  }
  logs += '>';

  console.log(logs);
}

solution(input);