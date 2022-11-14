// https://www.acmicpc.net/problem/11022

function solution(chunk) {
  chunk.toString().split('\n').forEach((str, index) => {
    const [a, b] = str.split(' ');

    if (b && b > 0) {
      console.log(`Case #${index}: ${a} + ${b} = ${Number(a) + Number(b)}`);
    }
  });
}

process.stdin.on('data', solution);