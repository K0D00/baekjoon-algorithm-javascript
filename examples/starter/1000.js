// https://www.acmicpc.net/problem/1000

function solution(chunk) {
  // chunk = 입력 버퍼
  // 마지막 입력값인 '\n'를 trim()으로 제거
  const [a, b] = chunk.toString().split(' ').map(char => Number(char.trim()));
  console.log(a + b);
}

process.stdin.on('data', solution);