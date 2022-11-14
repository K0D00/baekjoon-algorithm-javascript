// https://www.acmicpc.net/problem/2558

function solution(chunk) {
  const [a, b] = chunk.toString().split('\n').map(char => Number(char.trim()));
  console.log(a + b);
}

process.stdin.on('data', solution);