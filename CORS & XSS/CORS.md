# SOP (동일 출처 정책: Same-Origin Policy)

```
어떤 출처에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호작용하는 것을 제한하는 보안 방식
```

- 출처 같다는 것 \_ 두 url의 프로토콜, 호스트, 포트 3개가 동일하다는 것을 의미 <br/> <br/>

> 도입 이유

- 보안상 이슈를 방지하기 위해 브라우저는 다른 사이트 간의 요청을 막는다.
- 로그인 정보가 유지된 경우 브라우저에 인증정보가 쿠키로 저장되어 사이트에 접속하여 API 요청 등을 보낼 때마다 해당 요청을 증명하기 위해 브라우저에 저장된 토큰을 실어서 보내게 될 경우 탈취한 정보를 다른 서버로 보내 악위적인 공격에 사용될 가능성이 있다 <br/> <br/>

> 크로스 도메인 이슈

- SOP 때문에 js(XMLRequest)로 서로 다른 웹페이지 접근할 때 같은 출처의 페이지만 접근 가능
- 웹 생태계가 다양해지면서 여러 서비스들 간에 보다 자유롭게 데이터가 주고받아 질 필요성 대두
- SOP를 우회하여 서로 다른 도메인 간 통신 방법이 필요하게 된다.
- CORS는 이를 풀어주는 역할로 크로스 도메인 이슈를 해결하는 표준 방식
- 여러 해결책

  ```
  - JSONP
  - Reverse Proxy
  - Flash Socket
  ```

- 현재 유지 관리되는 표준 사양은 WHATWG의 'Fetch Living Standard'<br/><br/>

# CORS (교차 출처 자원 공유 방식 : Cross-Origin Resource Sharing)

```
추가 HTTP 헤더를 사용하여 합의된 출처들간의 합법적으로 허용하기 위해 기준을 충족시키면 다른 출처간에도 리소스 공유가 되도록 만들어진 매커니즘
```

- 웹브라우저에서 외부 도메인 서버와 통신하기 위한 방식을 표준화한 스펙
- 서버 & 클라이언트가 정해진 헤더을 통해서 서로 요청이나 응답에 반응할지 결정하는 방식

<br/>

> 요청 과정

1. 다른 출처로의 cross-origin 요청을 전송한다 ( ex \_ 내 프로젝트 -> Google api )
2. 브라우저는 다른 출처 끼리의 요청에는 Origin이라는 헤더 추가한다

   - 헤더는 데이터가 다른 곳으로 전송될 때 데이터에 앞쪽에 붙는 부가 정보로, 받는 쪽의 ip 주소 & 사용할 프로토콜 옵션 등이 적혀있다

3. 헤더의 Origin 항목에는 요청한 쪽의 scheme & 도메인 & 포트 정보가 담겨있다

   - Https -> scheme 요청할 자원에 접근할 방법 -> http ftp telnet 등의 프로토콜
   - angBlog.com -> 도메인
   - :123 -> 포트

4. 요청을 받은 서버는 response 헤더에 지정된 Access-Control-Allow-Origin - 허용 출처 정보를 실어 보낸다

   - 아무나 보내도 되는 요청의 경우 \*

5. 브라우저측에서 비교해 Origin에 보낸 출처값과 서버의 Response 헤더에 담긴 Access-Control-Allow-Origin에 같은 정보가 있다면 안전한 요청으로 간주하고 응답 데이터를 받아오게 된다.

<br/>

> CORS 에러

1. 클라이언트 측에서 Origin에 정보(출처)를 담아 본 요청 보낼 때
2. CORS 설정이 없거나 허용되지 않은 서버측에서 응답을 보낼 경우
3. 브라우저측에서 응답헤더에 Allow-Origin에 없음을 확인하고 CORS 에러를 알린다

   -> Preflight 요청을 통해 실제 요청을 전 확인을 통해 서버가 지켜지도록 해결한다.

<br/>

> CORS 해결

1. 프론트 개발 환경에서 프록시 서버 설정

2. 백엔드측에서 CORS 옵션에 자원 공유을 허용할 다른 출처(사이트)들을 미리 명시해주면 해당 서버로 http 요청이 가능해진다

<br/>

## CORS 요청 동작 방식 ( 3가지 )<hr/>

### 1. 간단한 요청 (Simple)

- 기존데이터에 부작용을 일으키지 않는 요청
- CORS 사전 요청을 발생시키지 않는 요청
- 간단한 요청의 경우 서버에서 Access-Control-Allow-Origin & 클라이언트측 Origin 을 비교해 같으면 데이터를 전송한다

> 아래 조건을 모두 만족해야 함

- GET, HEAD, POST 중 한 가지 방식을 사용
- Custom Headers 존재 x
- POST의 경우 Content-Type이 아해 셋 중 하나를 만족:
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain

<br/>

### 2. 사전 요청 (Preflight)

```
Put/Delete 같이 서버의 데이터에 영향을 줄 수 있는 요청들은 본 요청을 보내기 전에 Preflight 요청을 먼저 보내 허용 여부를 검증한 다음, 본 요청이 안전한지 확인하고 허락이 떨어져야 본격적으로 요청이 가능하다
```

- OPTIONS 메소드를 통해 본 요청 보내기 전 사전 요청을 보내 서버가 응답 가능한지 확인하는 방법
- 클라이언트 요청 헤더 : Origin(요청 출처), Access-Control-Request-Method & Headers(실제 요청 메서드 & 헤더)
- 서버 응답 헤더 : 응답 코드 200 대 + 응답 바디 비어있는 것이 좋다 + Access-Control-Request-Origin & Method & Headers & Max-Age(서버 측 허가 출처 & 메서드 & 헤더 & 사전 요청 응답 캐시 기간를 반환)

  - 캐시해두면 만료전 다음 요청을 바로 본 요청으로 보낼 수 있다

<br/>

> 사전 요청 보내는 경우

- GET, HEAD, POST 이외의 요청
- POST 요청일 경우 Content-Type이 간단한 요청의 3가지 방식이 아닐때
- Custom Headers가 포함된 경우
  사전요청 과정

<br/>

### 3. 인증정보 포함 요청 (Credentialed)

- 인증관련 헤더를 포함할 때 사용하는 요청 \_ XHR은 기본적으로 요청에 쿠키를 전송하지 않는다
- 클라이언트 요청에 쿠키를 포함하고 싶을 경우 withCredentials 속성 값을 true로 설정
- 서버 측도 응답에 Access-Control-Allow-Credentials 응답 헤더를 true로 설정
- 토큰 등 사용자 식별 정보가 담긴 요청에 대해서는 보다 엄격하며 브라우저에 저장된 쿠키가 나쁘게 쓰일 수 있으니깐 양쪽의 조건을 갖추도록 한다.

> 설정 (브라우저 -> 서버에게 OPTIONS 메소드로 요청)

- 클라이언트 측에서 요청에 옵션의 credentials 항목을 true(include)로 세팅
- 서버 측 또한 클라이언트의 출처(웹페이지 주소)를 정확히 명시한 다음 Access-Control-Allow-Credentials 항목을 true로 맞춰줘야 한다
- 모든 출처 허용하는 순간 에러 발생한다 (\* : 설정 X)
