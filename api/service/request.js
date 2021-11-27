const API_KEY = process.env.REACT_APP_API_KEY; // 환경 변수 선언

const requests = {
    // 예시 api 데이터
    fetchComedyMovie: `/movie?api_key=${API_KEY}&language=en-US`,
    fetchUser: `/name?api_key=${API_KEY}&with_networks=123`,
    fetchDocumentaries: `/discover/document?api_key=${API_KEY}`,
}

export default requests; // export