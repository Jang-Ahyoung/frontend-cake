# debouncing & throttling 프로그래밍 기법

1.  debouncing : 이벤트를 그룹화하여 반복적으로 호출되는 함수 중 하나의 이벤트만 발생하도록 하는 기법
2.  throttling : 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 이벤트 제어하는 기법

> 구현

    스코프, 클로저, 타이밍 이벤트 활용해 구현

> 활용

1. 사용자가 창 크기 조정을 멈출 때까지 기다렸다가 resizing event 사용
   -> 네이버지도, 다음지도 등에서 스크롤 휠을 통해 지도를 확대/축소 하기
2. 사용자가 키보드 입력을 중지(예: 검색창) 할 때까지 ajax 이벤트를 발생시키지 않기 위해
   - 디바운싱을 적용하면 입력이 끝난후에 검색
   - 쓰로틀링을 적용하면 입력중에도 검색 결과를 계속 갱신
3. 페이지의 스크롤 위치를 측정하고 최대 50ms마다 응답하기를 바랄 경우
4. 앱에서 요소를 드래그시 좋은 성능을 보장하기 위해

# Debouce (디바운스)

- 마지막 이벤트만 실행

```jsx
let debouncer;
window.addEventListener('scroll', () => {
  if (debouncer) {
    clearTimeout(debouncer);
  }
  debouncer = setTimeout(() => {
    console.log('스크롤');
    const count = document.getElementById('count');
    count.innerText = parseInt(count.innerText) + 1;
  }, 300);
});
// 결과적으로 마지막으로 발생한 이벤트에 대해서만 300ms 가 지난 후 이벤트 콜백 함수가 호출되게 된다!
```

# Throttling (쓰로틀링)

- 이벤트의 일정 주기로 실행
- 설정 시간 동안 최대 한번만 발생하도록 실행 횟수 제한
- 타이머가 설정되 있다면 아무 동작도 하지 않고, 타이머가 없다면 타이머를 설정한다

```jsx
let throttler;
window.addEventListener('scroll', () => {
  if (throttler) {
    return;
  }
  throttler = setTimeout(() => {
    console.log('스크롤');
    const count = document.getElementById('count');
    count.innerText = parseInt(count.innerText) + 1;
    throttler = null;
  }, 1000);
});
// 결과적으로 마지막으로 발생한 이벤트에 대해서만 300ms 가 지난 후 이벤트 콜백 함수가 호출되게 된다!
```

> 필요성

    스크롤 리스너 같이 짧은 시간에 다량의 이벤트를 발생시킬 때 매번 스크롤 이벤트에 대한 콜백이 수행되는 일은 매우 큰 리소스가 발생한다. 특히 복잡도 높은 함수가 실행되도록 설정되었거나 스크롤 할 때마다 레이아웃 렌더링이 되는 경우 사용자의 화면이 느려지거나 정지하는 성능 문제가 발생하게 되어 사용자 경험 떨어뜨리게 된다.

> 해결

- 쓰로틀링과 디바운싱의 이벤트지연을 통한 최적화 수행
  - 자바스크립트 라이브러리 underscore.js, lodash에서 debounce, throttle 이름의 메소드 제공하한다
- 리액트에서 실험중인 Concurrent 모드

> Lodash 도구 활용한 간단 구현

```jsx
_.debounce(f1, 1000);
_.throttle(f1, 1000);
```
