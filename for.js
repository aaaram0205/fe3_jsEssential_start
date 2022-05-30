//for 반복문 
//for (let 시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i += 1) {

    const li = document.createElement('li');
    li.textContent = `list-${i+1}`;
    
    if ((i + 1)  %  2 === 0) {   //짝수일때
        li.addEventListener('click', function (){
            console.log(li.textContent);
        });
    }
    
    ulEl.appendChild(li);
}


// var: 함수 레벨의 유효범위라 의도지않은 범위에서 변수가 사용될 수있다.
// let, const: 블록레벨 유효범위

function scope () {
    
    if (true) {
        //const test = 123;
        var test = 123;
        
    }
    //console.log('scope: ', test);
    console.log('scope: ', test);
}

scope ()


// 형변환
// 일치연산자를 써주자. (===, 자료형까지 비교), 동등연산자는 의도치않은 값을 가져옴
// truthy (참과 같은 값) : true, 'false', 1,2, {}, [], '3.14', -12.....
//falsy (거짓과 같은 값) : false, ' ', undefined, null, NaN, 0, -0 

if ('false') {
    console.log(123456789)
  }