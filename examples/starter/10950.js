// https://www.acmicpc.net/problem/10950
// 10951 문제와 같음

function solution(chunk) {
  chunk.toString().split('\n').forEach(str => {
    const [a, b] = str.split(' ');

    if (b && b > 0) {
      console.log(Number(a) + Number(b));
    }
  });
}

process.stdin.on('data', solution);