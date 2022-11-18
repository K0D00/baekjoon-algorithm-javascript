// https://www.acmicpc.net/problem/10430

const str = require('fs').readFileSync('10430.txt').toString().trim().split(' ');
// const str = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const logs = [];

const [a, b, c] = str.map(ch => Number(ch));

logs.push((a+b)%c);
logs.push((a%c+b%c)%c);
logs.push((a*b)%c);
logs.push(((a%c)*(b%c))%c);

console.log(logs.join('\n'));