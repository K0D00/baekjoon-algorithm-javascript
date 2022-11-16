// https://www.acmicpc.net/problem/2054

const input =  require('fs').readFileSync('2504.txt');
// const input = require('fs').readFileSync('/dev/stdin');

// 미해결
function solution(chunk) {
  const str = chunk.toString().trim().split('');
  const stack = [];

  let count = 1;
  // ( ( ) )
  let index = 0;
  stack.push(str[index]);
  const recur = (s, i) => {
    const top = s[s.length-1];
    const ch = str[i];
    console.log(stack);
    if (top === ch) {
      s.push(ch);
      count *= recur(s, ++i);
    } else {
      if (top === '(' && ch === ')') {
        s.pop();
        return 2;
      } else if (top === '[' && ch === ']') {
        s.pop();
        return 3;
      }
    }
  }
  recur(stack, ++index);

  console.log('last', stack);
  console.log(count);
}

solution(input);