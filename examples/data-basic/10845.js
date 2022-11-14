// https://www.acmicpc.net/problem/10845

const input = require('fs').readFileSync('10845.txt');
// const input = require('fs').readFileSync('/dev/stdin')

function solution(chunk) {
  const queue = [];
  const isEmpty = () => queue.length === 0
  const rows = chunk.toString().trim().split('\n')
  let logs = ''

  for (let i=1; i<rows.length; i++) {
    const [command, value] = rows[i].split(' ')

    if (command === 'push') {
      queue.push(value.trim())
    } else if (command === 'pop') {
      logs += `${isEmpty() ? -1 : queue.splice(0, 1)}\n`
    } else if (command === 'front') {
      logs += `${isEmpty() ? -1 : queue[0]}\n`
    } else if (command === 'back') {
      logs += `${isEmpty() ? -1 : queue[queue.length - 1]}\n`
    } else if (command === 'size') {
      logs += `${queue.length}\n`
    } else if (command === 'empty') {
      logs += `${isEmpty() ? 1 : 0}\n`
    }
  }

  console.log(logs)
}

solution(input)