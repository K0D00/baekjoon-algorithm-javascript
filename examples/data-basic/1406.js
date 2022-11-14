// https://www.acmicpc.net/problem/1406

const [str, m, ...arr] = require('fs').readFileSync('1406.txt').toString().trim().split('\n');
// const [str, m, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const left = str.split('');
const right = [];

for (let i=0; i<Number(m); i++) {
  const [command, value] = arr[i].split(' ');

  if (command === 'L' && left.length > 0) {
    right.push(left.pop());
  } else if (command === 'D' && right.length > 0) {
    left.push(right.pop());
  } else if (command === 'B') {
    left.pop();
  } else if (command === 'P') {
    left.push(value);
  }
}

console.log(left.join('') + right.reverse().join(''));