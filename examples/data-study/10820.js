// https://www.acmicpc.net/problem/10820

const inputs = require('fs').readFileSync('10820.txt').toString().split('\n');
// const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const t = inputs.filter(str => str.length < 1)

if (t.length) {
  inputs.splice(inputs.indexOf(t[0]), 1)
}

const isLowChar = (ch) => /^[a-z]/.test(ch);
const isUpperChar = (ch) => /^[A-Z]/.test(ch);
const isNum = (ch) => /^[0-9]/.test(ch);
const isSpace = (ch) => /^ /.test(ch);

const logs = [];

for (let i=0; i<inputs.length; i++) {
  const row = inputs[i].split('');

  let lcn = 0;
  let ucn = 0;
  let ncn = 0;
  let scn = 0;

  for (let j=0; j<row.length; j++) {
    const ch = row[j];

    if (isLowChar(ch)) {
      lcn += 1;
    } else if (isUpperChar(ch)) {
      ucn += 1;
    } else if (isNum(ch)) {
      ncn += 1;
    } else if (isSpace(ch)) {
      scn += 1;
    }
  }

  logs.push(`${lcn} ${ucn} ${ncn} ${scn}`);
}

console.log(logs.join('\n'));