# BOM ( Browser Object Model, 브라우저 객체 모델 )

브라우저에서 새 창을 열거나 이동할 때 프로그래밍적으로 제어할 수 있는 기능을 제공해주는 객체 모델

<br/>

# DOM ( Document Object Model, 문서 객체 모델 )

웹페이지의 문서 내용을 트리 구조로 나타내어 프로그래밍 언어를 사용해 문서 내용을 쉽게 읽고, 접근 및 제어를 가능하게 해주는 객체 모델

1. WHAT<br/>
   DOM은 XML혹은 HTML을 위한 프로그래밍 인터페이스 또는 API로, 문서의 내용을 트리 구조로 나타내는 일을 합니다.
   모든 프로그래밍 언어와 함께 사용할 수 있으며, 일단적으로 JS와 함께 사용되며 DOM 사용해 문서의 내용을 쉽게 읽고, 엑세스 및 업데이트 할 수 있습니다.<br/><br/>
   웹페이지를 객체지향적 방식의 표현으로, js같은 스크립트 언어의 도움으로 수정할 수 있다.
   돔기능을 사용해 요소에 엑세스할 수 있고, 메모리에서 내부적으로 트리 구조로 변환 가능하다.
   <br/>
2. WHY<br/>
   DOM은 문서의 children, 하위 요소를 얻기 위한 API를 제공하고
   DOM이 구성한 객체(=태그)에 DOM이 제공하는 메소드와 프로퍼티들을 통해 접근할 수 있다.

3. HOW<br/>

- document.createElement로 요소를 생성<br/>
- appendChild로 하위 요소로 집어넣는 과정을 진행<br/>
- setAttribute로 속성을 부여<br/>
- getElementById는 id 값을 통해 Element에 접근하는 방식<br/>
- getElementsByTagName 등
