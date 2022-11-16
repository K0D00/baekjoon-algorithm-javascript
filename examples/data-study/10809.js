// https://www.acmicpc.net/problem/10809

const input =  require('fs').readFileSync('10809.txt');
// const input = require('fs').readFileSync('/dev/stdin');

function solution(chunk) {
  const str = chunk.toString().trim();

  let logs = '';

  const aCodeIndex = 'a'.charCodeAt(0);
  const zCodeIndex = 'z'.charCodeAt(0);

  let engLowerChars = '';
  for (let i=aCodeIndex; i<=zCodeIndex; i++) {
    engLowerChars += String.fromCharCode(i);
  }

  for (let j=0; j<engLowerChars.length; j++) {
    const ch = engLowerChars[j]
    logs += `${str.indexOf(ch)} `;
  }

  console.log(logs);
}

solution(input);