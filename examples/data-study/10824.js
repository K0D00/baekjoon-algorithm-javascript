// https://www.acmicpc.net/problem/10824

const input =  require('fs').readFileSync('10824.txt');
// const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const [A, B, C, D] = chunk.toString().trim().split(' ');

  const a = Number(A + B);
  const b = Number(C + D);

  console.log(a+b);
}

solution(input);