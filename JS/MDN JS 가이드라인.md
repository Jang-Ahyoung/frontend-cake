# MDN JS 가이드라인

### 1. 확장된 구문 사용 → 가독성 최대화 & 일관성 촉진

- 블록 여는 중괄호는 같은 줄에 작성
- 각 줄 & 닫는 중괄호는 새 줄에 작성

```jsx
function myFunc() {
  // 괄호 전후에는 공백 포함 x
  if (dayOfWeek === 7 && weather === "sunny") {
    console.log("Hello!");
  }
}
```

<br/>

### 2. 연산자와 피연산자, 매개변수 등 사이에 공백 포함

- 더 명확하고 정확한 코드로 이어지기 때문
- 괄호 전후에는 공백 포함 x & 모든 문 세미콜론 마무리
  - if 등의 제어문 키워드와 괄호 사이에는 공백 없어야해

<br/>

### 3. 삼항 연산자는 중첩없이 한 줄에 입력 → 읽기 쉬워져

```jsx
let status = age >= 18 ? "adult" : "minor";
```

<br/>

### 4. Use strict equality \_ 항상 엄격한 평등과 불평등을 사용 === / !==

<br/>

### 5. 문자열 값 삽입에는 **문자열 리터럴 사용** `${}` (o) / + (x)

```jsx
console.log(`Hi! I'm ${myName}!`);
```

<br/>

### 6. DOM 노드에 문자열을 삽입 시 innerHTML이 아닌 **textContent** 사용

```jsx
let text = "Hello to all you good people";
const para = document.createElement("p");
para.textContent = text; // para.innerHTML = text; (x)
```

<br/>

### 7. 함수 표현식보다 `function` 선언 사용 정의

```jsx
// x
let sum = function (a, b) {
  return a + b;
};

// o
function sum(a, b) {
  return a + b;
}

// 화살표 함수 사용해 더 짧게 선언
const array1 = [1, 2, 3, 4];
let sum = array1.reduce((a, b) => a + b);
```

<br/>

### 8. 객체 선언 (리터럴 & ES 클래스 구문)

- 클래스와 관련되지 않은 일반 객체 - 리터럴 사용
  `let myObject = { };`
- 객체 클래스 - ES 클래스 구문 사용 → 구식 생성자(x)

  ```jsx
  class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    greeting() {
      console.log(`Hi! I'm ${this.name}`);
    };
  }

  // extends 상속
  class Teacher extends Person {
    ...
  }
  ```

<br/>

### 9. 배열 선언 (리터럴 사용 & push())

- 생성자 아닌 리터럴 사용
- 직접 할당 x → push 메소드 사용

```jsx
let myArray = []; // new Array(length); (x)
pets.push("cat"); // pets[pets.length] = 'cat'; (x)
```

<br/>

### 10. 오류 처리

- 실행 중지를 방지하기 위해 잠재적 오류 발생 가능성 있는 구문에 대한 예외 처리 ( try-catch )
