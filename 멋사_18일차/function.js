// 콜백함수
// 여기서 x와 y는 인자, 매개변수, 파라미터 
// 그리고 3과 5를 전달인자, 아규먼트라고 일컬음.
function add(x, y) {
    return x + y
}

add(3, 5)

function mul(x, y) {
    return x * y;
}

function cal(a, b) {
    return a(10, 10) + b(10, 10)
}

cal(add, mul)

// 화살표 함수
function add(x, y) {
    return x + y
}
let addArrow = (x, y) => {
    x + y
}

// 기명 함수
let aa = function sum(x, y) {
    return x + y
}
// 익명함수
let bb = function(x, y) {
    return x + y;
}
let cc = (x, y) => {
    x + y;
}

// 변수
let a // 선언
let a = 10 // 할당
// var : 전역에서 사용할 변수값, 실무에서 사용거의안함. 
// let : 변수로 사용하세요
// const : 변하지 않는 상수값

// 전개표현식
// 전개해서 값을 한꺼번에 받거나 순회할때 쓰임. 펼쳐보일떄도 쓰임.

function add(...x) {
    return x;
}

add(1, 2, 3, 4, 5)

// 블록스코프
if (true) {
    let hyuk = 100
}
console.log(hyuk)