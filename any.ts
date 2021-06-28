// 어떤 타입이어도 상관없는 타입
// 최대한 사용하지 않는 것이 좋음
// 이유: 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 떄문
function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

console.log(any1);
