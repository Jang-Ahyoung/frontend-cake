## 1. <b>CSS</b> (Cascading Style Sheet)

- HTML 요소들이 실제 표시되는 방법을 기술하기 위해 사용되는 스타일 시트 언어이다.
- 우선 순위 : !important > 태그 속 인라인 style 속성 > media 타입 > :root 사용자 정의 > 셀렉터 (selector>element) > 프로퍼티 선언 > 부모 상속 (body{margin:0;})
- 마지막 규칙 선언이 가장 높은 우선 순위 가짐
- 웹 애플리케이션 스타일 구성 방식은 크게 CSS-in-JS와 CSS-in-CSS로 나뉜다.
- Firefox의 경우 config 파일을 열어 사용자가 수정할 수 있다.
- 셀렉터<br/> \* (전체 요소), #id, #id \* (자식 선택자로 사용 가능), .class, + (인접 선택자 \_ 앞의 요소 뒤의 첫번째 요소만 선택), X[title] -> 속성 선택자, a[href="https://*.com"] -> 해당 앵커 태그에 스타일을 적용

- 다른 스타일시트 언어를 사용하는 이유

  > CSS 자체는 복잡한 언어가 아니지만 작업이 크고 고도화 될수록 불편함이 존재한다.

  > SCSS와 Sass는 변수의 사용, import 기능, 불필요한 선택자(Selector)의 과용과 연산 기능의 한계, 구문(Statement)의 부재 등을 쉽게 작업할 수 있도록 돕는다.

  > 간단한 코드의 차이가 가독성과 재사용성을 높여주어 보다 구조화된 작업을 쉽게 해준다.

  > js 및 css 파일들은 성능을 위해 하나의 js와 css 파일 혹은 특정 구조/요건에 맞게 병합하는 번들링 과정을 수행한다. 번들러/전처리 결과물이 css 파일과 같기 때문에 컴파일(build/deploy) 시간을 제외하면 동일한 성능을 제공한다.

- 성능에 초점을 맞춘다면 CSS-in-CSS, 개발 생산성에 초점을 맞춘다면 CSS-in-JS를 사용하는 편이 좋다.

  <br/>

# CSS 전처리기

## 2. <b>Sass</b> (Syntactically Awesome Style Sheets \_ 문법적으로 죽여주는 CSS)

- Sass는 CSS의 프리미엄 버전으로, CSS로 컴파일된 스타일시트 언어이다. 즉, CSS를 편리하게 이용할 수 있도록 확장된 스크립트 언어
- SCSS(확장자 .scss)와 들여쓰기된 Sass 구문(확장자 .sass)을 지원한다.
- Sass 들여쓰기 구문은 SCSS와 동일한 기능을 모두 지원 하지만 문서 형식을 설명하기 위해 들여쓰기를 사용한다. 중괄호와 세미콜롬이 없다.
- extend 키워드를 사용해 공통된 스타일을 관리할 수 있다.

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

<br/>

# CSS-in-CSS

인터랙션이나 속도가 중요한 웹사이트라면 CSS-in-CSS

## 4. <b>module CSS</b>

- 각 jsx/js 파일별로 CSS를 모듈화 하여 사용하는 방식으로, 번들러로 불러오면 컴파일 과정을 통해 고유한 클래스이름을 가진 객체가 반환된다.
- 모듈 CSS는 \*\*.module.{css,scss} 파일을 컴파일하여 ICSS라는 포맷 파일로 만든다.
- ICSS는 CSS에 여러 사항이 추가된 CSS로,
- 유니크한 클래스 이름으로 자동 변환하는 과정을 통해 scope를 지역적으로 제한하여 컴포넌트 스타일 중첩을 방지할 수 있다.
- 네이밍 규칙이 간소화된다는 장점과 수많은 css 파일을 생성해 관리해야 한다는 단점이 공존한다.

> import

```
import styles from "./app.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1>hello, click the button</h1>
      <button className={styles.btn}>Click</button>
    </div>
  );
}
```

> app.module.css

```
.container {
  background-color: aquamarine;
}

.btn {
  padding: 5px 10px;
}

```

- 필요한 css만 가져와 트리셰이킹을 가능케 하여 전체 js 파일 크기를 감소시키고, 어떤 의도로 import 했는지 쉽게 파악할 수 있으며 성능 저하를 방지할 수 있다.

```
import { btncontainer, btn } from "./app.module.css";

export default function App() {
  return (
    <div className={btncontainer}>
      <h1>hello, click the button</h1>
      <button className={btn}>Click</button>
    </div>
  );
}
```

> app.module.scss

```
.btncontainer {
  background-color: aquamarine;
  .btn {
    padding: 5px 10px;
  }
}
```

<br/>

# CSS-in-JS

## 5. <b>styled-components</b>

- CSS-in-JS 스타일링을 위한 프레임워크, 페이스북 개발자인 Vjeux이 2017년 발표
- CSS 모델을 문서 레벨이 아닌 컴포넌트 레벨로 추상화하여 JavaScript 환경을 최대한 활용할 수 있다.
  - 기존 css가 JS의 상태 값을 공유할 수 없는 문제 해결
  - CSS 파일(모듈)간에 의존성 문제 해결
  - CSS가 컴포넌트 스코프에서만 적용되기 때문에 우선순위 문제 발생 해결
- class명이 build time에 유니크한 해시값으로 클래스명 자동 생성 = 별도 명명 규칙 필요 x
- 러닝 커브, 새로운 의존성 발생과 별도의 라이브러리 설치에 따른 번들 크기 증대 및 CSS-in-CSS에 비해 느린 속도가 단점이 될 수 있다.
- 동적 인터랙션이 필요한 웹사이트에서 번들이 다운되고 인터랙션에 필요한 CSS가 삽입되기 전까지 제대로 된 인터랙션이 적용되지 않을 수 있다. = 인터랙티브한 웹페이지의 성능을 저하
  <br/> <br/>
- inline css ( DOM 노드에 속성으로 추가 )

```
function Table() {
  return (
    <table style={{ backgroundColor: "aqua" }}></table>
  )
}

export default Table;
```

```
function Table() {
  const table = {
    backgroundColor: "aqua"
  }
  return (
    <table style={table}></table>
  )
}

export default Table;
```

- styled-components ( DOM의 상단에 `<style>` 태그를 추가 )

```
import styled from 'styled-components';

function Table({sortedType}) {
  const Table = styled.table`
      background-color: aqua; /* background */
  `;

  return <Table> ... </Table>
}

export default Table;
```

```
<style>
.Table12a87 {
  background: ${(props) => (props.sortedType == 'date' && 'aqua')};
  background-color: aqua;
}
</style>

<table class="Table12a87"> ... </table>
```

## 6. <b>emotion.js</b>

- JavaScript로 CSS 스타일을 작성하도록 설계된 라이브러리

- 설치

```
npm i @emotion/react
```

- 작성

```
import { css, jsx } from '@emotion/react'

const color = 'white'
function App()  {
  return(
    <div css={css`padding: 32px; background-color: hotpink; font-size: 24px;  border-radius: 4px;  &:hover{color: ${color}; }`}>
      Hover to change color.
    </div>
  )
}
export default App;
```

- styled 형식의 작성법을 선호하는 사람은 별도 설치 후

```
npm i @emotion/styled @emotion/react
```

다음과 같이 작성이 가능하다.

```
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

render(<Button>This my button component.</Button>)
```

<br/>

## CSS over-riding 방지 [Global namespace 문제]

css는 글로벌 공간에 선언되기 때문에 파일을 나누어 작성해도 명칭이 같은 경우 오버라이딩이 일어난다. 해당 문제를 방지하기 위해 별도의 class 명명 규칙 등으로 적용/분할할 필요가 있다.

- CSS wrapper naming<br/>
  파일간 독립적인 공간을 가지고 스타일 적용을 위해 컴포넌트 파일에선 최상위 container 태그의 클래스 명칭/아이디를 jsx 파일명과 동일한 이름으로 이름짓고, scss 파일에서 해당 부분을 wrapper 하는 방식으로 작성하면 된다.

- BEM (Block Element Modifier)<br/>
  네임스페이스 충돌을 막기위해 css 제작 방법론
