# gloabl variables

### 1 ) css

- common/colors.css

```
:root {
  --color-main: aquamarine;
}
```

```
@import "./common/colors.css";

.container {
  background-color: var(--color-main);
}
```

### 2 ) scss

- common/\_variables.scss

```
$global-background: aquamarine;
```

```
@import "./common/_variables";

.container{
  background-color: $global-background;
}
```

- common/colors.module.css

  > :export SCSS/CSS 파일의 구문은 css-loader에서 모듈 로 취급하는 파일에 대해서만 작동

```
$mainbackground : skyblue;
$mainColor: aquamarine;

:export {
    mainbackground : $mainbackground;
    mainColor : $mainColor;
}
```

```
@import './common/colors.module.scss';

.container{
  background-color: $mainColor;
}
```

- scss + 기본 common/colors.css

  > @import될 때마다 실행되고 해당 CSS가 내보내지므로 컴파일 시간이 늘어나고 출력이 부풀려집니다.

  > globals로 css variables을 사용하면 입력 시 로드되는 기본 스타일시트에서 한 번만 선언하면 됩니다.

```
@import "./common/colors.css";

.container{
  background-color: var(--color-main);
}
```

# 1. CSS

```
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>hello, click the button</h1>
      <button className="btn">Click</button>
    </div>
  );
}
```

```
* {
  box-sizing: border-box;
  margin: 0;
  transition: 0.5s;
}

.container {
  background-color: aquamarine;
}
.container h1 {
  color: gray;
  cursor: pointer;
}

.container h1:hover {
  color: black;
  font-size: 3rem;
}

.container .btn {
  padding: 10px;
  cursor: pointer;
  background-color: white;
}

```

# 2. Sass

Syntactically Awesome Style Sheets는 CSS pre-processor 로서, 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐 만 아니라, 코드의 가독성을 높여주어 유지보수를 쉽게해줍니다.

```
import "./styles.sass";
```

```
import './common/colors.sccs';      // $mainBackground : aquamarine;


*
  box-sizing: border-box
  margin: 0
  transition: 0.5s

.container
  background-color:$mainBackground

  h1
    color: gray
    cursor: pointer
  h1:hover
    color: black
    font-size: 3rem

  .btn
    padding: 8px 10px
    cursor: pointer
    background-color: white
```

# 3. scss

```
import "./styles.scss";
or
import styles from "./styles.scss";
```

```
import './common/colors.sccs';

*{
  box-sizing: border-box;
  margin: 0;
  transition: 0.5s;
}
.container{
  background-color: aquamarine;

  h1{
  color: gray;
  cursor: pointer;
  }
  h1:hover{
    color: black;
    font-size: 3rem;
  }

  .btn{
    padding: 8px 10px;
    cursor: pointer;
    background-color: white;
  }
}
```
