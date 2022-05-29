import test from "./getRandom";

// if else else if 
const abcd =test();

if ( abcd === 1 ) {
    console.log('random is 1') 
} else if ( abcd === 2 ){
    console.log('random is 2') 
} else {
    console.log('rest...') 
}






// 할당연산자
let a = 2;
//a = a + 1;
a += 1;
console.log(a);


// 비교연산자
function isEqual (x, y) {
    return x === y;   // 일치연산자
}

console.log(isEqual(1,1));
console.log(isEqual(1,'1'));  //false 데이터타입까지 일치해야한다.


const aa = 1;
const bb = 3;

console.log (aa !== bb);

//논리연산자  and, or, not 연산자
const aaa =  1 === 123;
const bbb = 'ab'  === 'abc';
const ccc = false;

console.log('&&: ', aaa && bbb && ccc)  
console.log('||: ', aaa || bbb || ccc)
console.log('!: 부정연산자, Not 연산자 ', !aaa);


//삼항 연산자
const aaaa = 1 < 2;

if (aaaa) {
    console.log('참!');
} else {
    console.log('거짓!')
}

// ==> 위 코드를 삼항연산자화하면
console.log('삼항연산자 결과값: ',  a ? '참!' : '거짓!');
