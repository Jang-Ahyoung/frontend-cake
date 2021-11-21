/* 여러 페이지에 걸쳐 데이터를 호출해야 될 때 */

// 여러 페이지인 경우 1
async function fetchMetaData() {
    let allData = [];
    let isPageLeft = true;
    let currentPage = 0;

    while (isPageLeft) {
        currentPage++;
        const response = await axios.get("url", {
            params: { param1: "param1", param2: "param2" }
        });
        const { data, total_pages } = await response.data;
        data.forEach((e) => allData.unshift(e)); // [Object,Object,Object,Object...]의 형태로 연결된 하나의 배열로 완성돼
        isPageLeft = currentPage < total_pages;
    }
    return allData;
}

// 여러 페이지인 경우 2
async function fetchMetaData(url) {
    const { total_pages } = await axios.get(url).then((res) => res.data); // 총 받을 페이지 수를 먼저 get한 다음
    const response = await Promise.all( // Promise를 통해 total_pages만큼 반복 호출해준다
        Array.from(Array(total_pages), (_, i) =>
            axios(url + `&page=${i + 1}`).then((res) => res.data.data) // 각 페이지의 정보 오브젝트로 받아와 배열로 완성
        )
    );
    return response; // [Array(10), Array(9)] 형식의 데이터 반환
}

// 여러 페이지인 경우 2 _ 원하는 형식의 데이터 추출을 진행
async function fetchMetaData(url, type) {
    const { total_pages } = await fetchData(url);
    const response = await Promise.all(
        Array.from(Array(total_pages), (_, i) =>
            axios(url + `&page=${i + 1}`).then((res) => {
                return res.data.data.reduce((acc, cur) => {
                    return (acc += parseInt(cur[type]));
                }, 0);
            })
        )
    );
    return response.reduce((acc, cur) => (acc += cur), 0);
}