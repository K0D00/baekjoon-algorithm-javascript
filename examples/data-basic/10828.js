// https://www.acmicpc.net/problem/10828
const input = require('fs').readFileSync('/dev/stdin')

function solution(chunk) {
  const stack = []
  const isEmpty = () => stack.length === 0
  const rows = chunk.toString().trim().split('\n')
  let logs = ''

  for (let i=1; i<rows.length; i++) {
    const [command, value] = rows[i].split(' ')

    if (command === 'push') {
      stack.push(value.trim())
    } else if (command === 'pop') {
      logs += `${isEmpty() ? -1 : stack.splice(-1)}\n`
    } else if (command === 'top') {
      logs += `${isEmpty() ? -1 : stack[stack.length - 1]}\n`
    } else if (command === 'size') {
      logs += `${stack.length}\n`
    } else if (command === 'empty') {
      logs += `${isEmpty() ? 1 : 0}\n`
    }
  }

  console.log(logs)
}

solution(input)