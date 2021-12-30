### 1. If 조건문 안의 수많은 '||' 조건<hr/>

```
// long
if ( authType === 'Admin' || authType === 'Professor'  || authType === 'Assistant' ){

}


// short 1
if (['Admin', 'Professor','Assistant'].includes(authType)){

}

// short 2
let allowType = ['Admin', 'Professor','Assistant'];
if(allowType.includes(authType)){

}
```

<br/>

> <b>|| operator</b>

- false 값일 경우 (Null 또는 Undefined, '', 0, false 등) 기본값 설정 가능
- 오른쪽에 있는 값을 기본값(default)으로 설정

```
const name = auth.userName || 'unlogined';
```

<br/>

### 2. Nullish 연산자 `??`<hr/>

값이 null이나 undefined일 때만 오른쪽 값으로 대체해 반환하는 연산자

```
const userName = auth.name ?? 'No User';
```

<br/>

<!-- ### 2. Logical nullish assignment `??=`<hr/>

현재 값이 null이나 undefined일 때만 새로운 값을 저장한다. -->

### 3. optional chaining Operator `?.` <hr/>

참조가 nullish(null 또는 undefined)일 경우, 에러 대신 undefined 값을 반환

<br/>

### 4. Default Parameter (Parameter의 기본값 설정) <hr/>

undefined인 값은 디폴트 파라미터로 대체된다.

```
// longhand
function func1(x, y, z) {
  if (y === undefined)
    y = 3;
  if (z === undefined)
    z = 4;
  return x * y * z;
}

// Shorthand
function func1(x, y, z) {
    y = y ?? 3; // null 이나 undefined일 경우 defaul 값 반환
    z = z ?? 4;
  return x * y * z;
}

// Shorthand
func2 = (param1, param2 = 5, param3 = 8) => (param1 * param2 * param3);
func2(2) // 80 = 2 * 5 * 8 (param1 = 2)
```

<br/>

### 5. 여러 값 동시에 지정<hr/>

```
let [data1, data2, data3] = [1, 2, 3];
```

<br/>

### 6. 함수에서의 삼항연산자<hr/>

```
let data = 1;
if (data == 1) {
    func1();
} else {
    func2();
}

// Shorthand
(data === 1 ? func1 : func2)();
```

<br/>

### 7. Spread 연산자 활용한 배열 값 합치기<hr/>

```
// longhand (concat 활용)
const arr1= [1, 2, 3];
const arr2 = [4 ,5 , 6].concat(arr1);

// shorthand (... 활용)
const arr1 = [1, 2, 3];
const arr2 = [4 ,5 , 6, ...arr1];
``
```

<br/>

### 8. (+) 로 문자열 -> 숫자 전환

```
// Longhand
parseInt('12'); // 12
parseInt('2.33'); // 2
parseFloat('2.33'); // 2.33

// Shorthand
+ '12'; // 12
+ '2.33'; // 2.33
```

- 차이점

```
let a = '12px'
parseInt(a) // 12
+ a // NaN
```

<br/>

### 9. Math.floor 단축 `~~ (Double tilde 연산자)`

```
// Longhand
Math.floor(1.9) === 1 // true

// Shorthand
~~1.9 === 1 // true
```

- ! 음수의 경우 다른 결과를 출력하게 된다

```
~~(-5.5);  // -5
Math.floor(-5.5);  // -6
```

- 가독성 상 좋아보이진 않지만 양수에 대한 연산의 경우 개인 프로젝트에서 사용하기 편리하다고 생각
- 속도 차이는?

<br/>
