'use strict';
var isDone = false;
isDone = true;
console.log(typeof isDone);
var isOk = new Boolean(false);
console.log(typeof isOk);
// let isNotOk: boolean = new Boolean(false);
// boolean은 primitive(원시) 타입이므로 new Boolean(false) object(객체) 타입을 넣어줄 수 없음
