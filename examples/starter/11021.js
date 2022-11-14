// https://www.acmicpc.net/problem/11021

function solution(chunk) {
  chunk.toString().split('\n').forEach((str, index) => {
    const [a, b] = str.split(' ');

    if (b && b > 0) {
      console.log(`Case #${index}: ${Number(a) + Number(b)}`);
    }
  });
}

process.stdin.on('data', solution);