## 1. <b>CSS</b> (Cascading Style Sheet)

- HTML 요소들이 실제 표시되는 방법을 기술하기 위해 사용되는 스타일 시트 언어이다.
- 우선 순위 : !important > 태그 속 인라인 style 속성 > media 타입 > :root 사용자 정의 > 셀렉터 (selector>element) > 프로퍼티 선언 > 부모 상속 (body{margin:0;})
- 마지막 규칙 선언이 가장 높은 우선 순위 가짐
- Firefox의 경우 config 파일을 열어 사용자가 수정할 수 있다.

- 다른 스타일시트 언어를 사용하는 이유

  > CSS 자체는 복잡한 언어가 아니지만 작업이 크고 고도화 될수록 불편함이 존재한다.

  > SCSS와 Sass는 변수의 사용, import 기능, 불필요한 선택자(Selector)의 과용과 연산 기능의 한계, 구문(Statement)의 부재 등을 쉽게 작업할 수 있도록 돕는다.

  > 간단한 코드의 차이가 가독성과 재사용성을 높여주어 보다 구조화된 작업을 쉽게 해준다.

  > js 및 css 파일들은 성능을 위해 하나의 js와 css 파일 혹은 특정 구조/요건에 맞게 병합하는 번들링 과정을 수행한다. 번들러/전처리 결과물이 css 파일과 같기 때문에 컴파일(build/deploy) 시간을 제외하면 동일한 성능을 제공한다.

## 2. <b>Sass</b> (Syntactically Awesome Style Sheets \_ 문법적으로 죽여주는 CSS)

- Sass는 CSS의 프리미엄 버전으로, CSS로 컴파일된 스타일시트 언어이다. 즉, CSS를 편리하게 이용할 수 있도록 확장된 스크립트 언어
- SCSS(확장자 .scss)와 들여쓰기된 Sass 구문(확장자 .sass)을 지원한다.
- Sass 들여쓰기 구문은 SCSS와 동일한 기능을 모두 지원 하지만 문서 형식을 설명하기 위해 들여쓰기를 사용한다. 중괄호와 세미콜롬이 없다.

### Sass 코드

```
@import "./Common.scss";

.App
  background-color: $red

.section1
  background-color: $blue
  h1
    color:white

.section2
  background-color: antiquewhite
  h1
    color:green
```

- 코드 내에서 다른 sass 파일에 선언된 변수를 불러위해 @import를 사용한다.

```
<!-- Common.scss -->
$red : #000;
$blue : #000;
```

- 줄이 끝날 때마다 띄워쓰기으로 계산되고, Sass 문법은 멀티라인 작성 시 컴파일 에러가 발생한다.

```
// 컴파일 에러 발생
$breakpoints: (
  sm: 480px,
  md: 768px,
  lg: 1024px
)

// 꼭 한 줄에 작성해야 한다.
$breakpoints: ( sm: 480px, md: 768px, lg: 1024px )

```

> Sass는 SCSS 문법 사용을 전제로 CSS와 완전히 호환된다는 장점과 조건문과 반복문(함수), 연산 기능과 변수 사용 같은 추가 기능을 제공한다.

## 3. <b>SCSS</b> (Sassy CSS) \_ 쩌는 CSS

Sass 후속으로 나온 문법으로, SCSS가 더 넓은 범용성과 CSS의 호환성 등의 장점을 가지기 때문에 사용하기를 권장하고 있다.

### SCSS 코드

```
.App{
background-color: red;

.section1{
  background-color: blue;
  h1{
    color:white;
  }
}

.section2{
  background-color: antiquewhite;
  h1{
    color:green;
  }
}
}
```

> Sass에서 SCSS로 변경

sass-convert 커맨드라인 도구를 사용해 자동으로 파일을 변환할 수 있다.

```
sass-convert style.sass style.scss
```

> 리액트 사용법

```
yarn add node-sass
```

- 설치가 완료 후 .scss 파일로 sass파일을 생성하면 된다.<br/><br/>

## CSS over-riding 방지

css는 글로벌 공간에 선언되기 때문에 파일을 나누어 작성해도 명칭이 같은 경우 오버라이딩이 일어난다. ( 글로벌 네임스페이스) 해당 문제를 방지하기 위해 명명 규칙 등으로 분할한 필요가 있다.

- CSS wrapper naming
  파일간 독립적인 공간을 가지고 스타일 적용을 위해 컴포넌트 파일에선 최상위 container 태그의 클래스 명칭/아이디를 jsx 파일명과 동일한 이름으로 이름짓고, scss 파일에서 해당 부분을 wrapper 하는 방식으로 작성하면 된다.

- BEM (Block Element Modifier)
  css 제작 방법론
