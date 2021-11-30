# install

```
1. yarn add @reduxjs/toolkit

2. yarn add redux

3. yarn add react-redux

```

## slice

```
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : 'user',
    initialState:{
        // 초기값
    },
    reducers:{
        // 리듀서
    }
});

export const { reduce 함수들 } = userSlice.actions; // reducer 명령 export

export const selectUser = (state) => state.user.user; // pull 해올 수 있는 값 -> initialState export

export default userSlice.reducer; // 리듀서 export -> store에서 import 해줄 것

```

## store

```
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer
  }
});

```

<br/>

# index.js

1. import \_ redux store & Provider

```
import store from "./app/store";
import { Provider } from "react-redux";
```

2. Provider 태그로 App 컴포넌트 감싸기

```
<Provider store={store}>
    <App />
</Provider>
```

- 전체 코드

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

<br/>

# component 리덕스 코드 작성

1. store 에 저장된 값만을 불러오고 싶을 경우 [ useSelector ]

   - useSelector을 import해와 slice.js에서 export한 변수를 받는다.

```
import { useSelector } from 'react-redux'; // redux로 부터 useSelector를 import 한다.
import { selectOpenMail } from '../../features/mailSlice'; // 값을 확인하고 싶은 변수 import

const selectedMail = useSelector(selectOpenMail); // 이제 가져온 값을 대입하여 변수처럼 사용할 수 있다.

```

2. action을 통해 저장된 값에 특정 변화를 줄 경우 [ useDispatch ]

   - useDispatch을 통해 dispatch 함수 내부에 수행할 작업과 변경 사항을 전달하면 된다.

```
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';
```

```
const dispatch = useDispatch();
```

- 태그 내부에 바로 작성 방법

```
<button
    onClick={() => dispatch(selectMail({ id, title, subject, description, time}))}>
</button>
```

- 함수 형식으로 전달 방식

```
const openMail = () => {
    dispatch(selectMail({
        id, title, subject, description, time
    }));
    history.push('/mail');
};

<button onClick={openMail}></button>

```

3. true/false 같이 action을 필요로 하지 않을 경우 (단순 reduce 실행 작업)

- 마찬가지로 useDispatch을 활용하여 선언된 reduce 명령들을 끌어와 사용할 수 있다.

```
import { useDispatch } from 'react-redux';
import { openMessage } from '../../features/mailSlice';
```

```
const dispatch = useDispatch();
```

```
onClick={()=>dispatch(openMessage())}
```
