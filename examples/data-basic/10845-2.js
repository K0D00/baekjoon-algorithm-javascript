// https://www.acmicpc.net/problem/10845

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function (e, i) { return (i === 0 ? false : e) });

function Queue() {
  this._buffer = [];
  this._front = 0;
  this._rear = -1;
}
Queue.prototype = {
  push : function (x) {
    this._buffer[++this._rear] = x;
  },
  pop : function () {
    if (this.empty()) return -1;

    let data = this._buffer[this._front];
    delete this._buffer[this._front];

    if (this._front === this._rear) {
      this._rear--;
      return data;
    }

    this._front++;
    return data;
  },
  size : function () {
    return this._rear - this._front + 1;
  },
  empty : function () {
    return !this.size();
  },
  front : function () {
    if (this.empty()) return -1;
    return this._buffer[this._front];
  },
  back : function () {
    if (this.empty()) return -1;
    return this._buffer[this._rear];
  }
};

const queue = new Queue();
let logs = '';
input.forEach(function (e) {
  const c = e.split(' ');
  switch (c[0]) {
    case 'push':
      queue.push(c[1]);
      break;
    case 'pop':
      logs += `${queue.pop()}\n`;
      break;
    case 'size':
      logs += `${queue.size()}\n`;
      break;
    case 'empty':
      logs += `${queue.empty() ? 1 : 0}\n`;
      break;
    case 'front':
      logs += `${queue.front()}\n`;
      break;
    case 'back':
      logs += `${queue.back()}\n`;
      break;
    default:
  }
});

console.log(logs);