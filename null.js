"use strict";
// tsconfig.json에서 strict 옵션을 변경하지 않는다면 string, number에는 null과 undefined을 사용할 수 없음
// let myName: string = undefined;
// let age: number = undefined;
// undefined에는 null 사용 불가, 반대로 null에도 undefined 사용 불가
// let u: undefined = null;
// void 타입에는 null은 사용할 수 없지만 undefined는 사용 가능
// let v: void = null;
let v2 = undefined;
// | 연산자를 사용하면 string과 null을 같이 사용할 수 있다.
let union = null;
union = 'JaeHong';
