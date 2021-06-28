"use strict";
console.log(Symbol('foo') === Symbol('foo'));
const sym = Symbol();
const obj = {
    [sym]: 'value',
};
console.log(obj[sym]);
/*
  원시타입의 값을 담아서 사용.
  고유하고 수정불가능한 값으로 만든다.
  보통 접근을 제어할때 사용하는 경우가 많음
*/
