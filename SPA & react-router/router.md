## 설치

```
npm install react-router-dom
or
yarn add react-router-dom
or
npm install react-router-dom --save
```

- 리액트 라우터는 브라우저 이동 없이 컴포넌트만 변화해 빠른 페이지 전환, SPA 애플리케이션 제작을 가능케 한다.
- Next 프레임워크 사용시 설치 없이 pages 폴더에 바로 라우터 페이지를 생성할 수 있다.<br/><br/>
- `--save`는 package.json에 패키지를 자동으로 추가하기 위한 명령어이다.<br/><br/>

# 1. react-router

## index.js 코드

```
import { BrowserRouter } from 'react-router-dom'; // 선 import

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter> // App 컴포넌트 감싸주기
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
```

- App.js 파일의 코드를 'BrowserRouter' 태그로 감싸줄 수 있지만, <br/>
  상위 파일인 index.js 코드에서 먼저 브라우저라우터를 import해 App 컴포넌트를 감싸주면 App.js에서 코드를 더 간결하고 보기 좋게 작성할 수 있다.<br/><br/>

## App.js 코드

```
import React from 'react';
import Login from './Login';
import User from './User';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/user' render={() => <User user={user} />} /> />
        </Routes>
    );
}

export default App;
```

- 라우터별 path 프로퍼티에 각 컴포넌트가 렌더링 될 URL 명과 , component={ }에 컴포넌트 페이지를 작성한다.
- 절대경로 '/' 라우터 태그에는 exact를 작성함으로써 이하 경로를 중복 출력하지 않도록 설정한다. 이를 통해 부분적으로 일치하는 것이 아닌 정확하게 일치하는 컴포넌트가 각자 URL에 렌더링된다.
- 라우터를 작성해줄 때 Routes 태그로 개별 Route 태그 전체를 감싸주어야 한다.
- props를 전달할 때는 `component={() => <User user={user} />} /> />` 형태로 전달해줘도 동작은 하지만 component prop에 inline-function형태로 값을 전달할 경우 렌더링 할 때마다 새로운 컴포넌트를 생성하기 때문에 성능 측면에서 좋지 않다.
- 매번 불필요하게 재생성해 마운트 하기 때문에 `component`가 아닌 `render`를 활용해 prop를 전달하면 이는 함수형 컴포넌트를 수용하고, 불필요하게 다시 마운트 되지 않는다.컴포넌트가 이미 마운트가 한번 되고 그후로는 업데이트된다.<br/><br/>

```
import { Switch, Route } from 'react-router-dom';
function App() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" render={(props) => (< Login {...props}/> )}
            <Route path='/user' render={() => <User user={user} />} /> />
            <Route component={PageNotFound} />
        <Switch>
    );
}

export default App;
```

- URL가 존재하지 않아 에러 페이지를 띄우려고 할 경우, path 값이 없는 `<Route>`를 사용해 구현할 수 있는데, 이 때 라우터가 path에 매칭시킬 값이 없기 때문에 무조건적으로 렌더링 되는 에러가 발생한다.
- 이경우 `<Route>` 들을 `<Switch>` 로 감싸주면 Route로 생성된 자식컴포넌트중 매칭되는 첫번째 Route(컴포넌트)를 렌더링하기 때문에 에러가 발생하지 않는다.<br/><br/>
