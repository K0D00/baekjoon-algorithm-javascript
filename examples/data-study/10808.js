// https://www.acmicpc.net/problem/10808

const input =  require('fs').readFileSync('10808.txt');
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

  const counts = {};
  for (const num of str) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (let j=0; j<engLowerChars.length; j++) {
    const ch = engLowerChars[j]
    logs += `${counts[ch] || 0} `;
  }

  console.log(logs);
}

solution(input);