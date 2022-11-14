// https://www.acmicpc.net/problem/10952

function solution(chunk) {
  const rows = chunk.toString().split('\n');

  for (let i=0; i<rows.length; i++) {
    const [a, b] = rows[i].split(' ');

    if (a < 1 && b < 1) {
      break;
    }

    console.log(Number(a) + Number(b));
  }
}

process.stdin.on('data', solution);