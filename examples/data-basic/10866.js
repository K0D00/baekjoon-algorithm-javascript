// https://www.acmicpc.net/problem/10866

const input = require('fs').readFileSync('10866.txt');
// const input = require('fs').readFileSync('/dev/stdin')

function solution(chunk) {
  const deque = [];
  const isEmpty = () => deque.length === 0
  const rows = chunk.toString().trim().split('\n')
  let logs = ''

  for (let i=1; i<rows.length; i++) {
    const [command, value] = rows[i].split(' ')

    if (command === 'push_front') {
      deque.unshift(value.trim())
    } else if (command === 'push_back') {
      deque.push(value.trim())
    } else if (command === 'pop_front') {
      logs += `${isEmpty() ? -1 : deque.splice(0, 1)}\n`
    } else if (command === 'pop_back') {
      logs += `${isEmpty() ? -1 : deque.splice(-1, 1)}\n`
    } else if (command === 'front') {
      logs += `${isEmpty() ? -1 : deque[0]}\n`
    } else if (command === 'back') {
      logs += `${isEmpty() ? -1 : deque[deque.length - 1]}\n`
    } else if (command === 'size') {
      logs += `${deque.length}\n`
    } else if (command === 'empty') {
      logs += `${isEmpty() ? 1 : 0}\n`
    }
  }

  console.log(logs)
}

solution(input)