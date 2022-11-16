// https://www.acmicpc.net/problem/17413

const input =  require('fs').readFileSync('17413.txt');
// const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const str = chunk.toString().trim();
  const stack = [];

  let logs = '';
  let tag = false;

  const print = (s) => {
    const count = s.length;

    if (count <= 0) {
      return;
    }

    for (let i=0; i<count; i++) {
      logs += s.pop();
    }
  };

  for (let i=0; i<str.length; i++) {
    const ch = str[i];

    if (ch === '<') {
      print(stack);
      logs += ch;
      tag = true;
    } else if (ch === '>') {
      logs += ch;
      tag = false;
    } else if (tag) {
      logs += ch;
    } else {
      if (ch === ' ') {
        print(stack);
        logs += ch;
      } else {
        stack.push(ch);
      }
    }
  }
  print(stack);

  console.log(logs);
}

solution(input);