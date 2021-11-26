
// 한 페이지의 데이터 fetch 해올때
const fetchData1 = async (param1, param2) => {
    try {
        const response = await axios
            .get("url", {
                params: { param1, param2 }
            })
            .then((res) => res.data.data[0]);
        setData(response); // 원하는 데이터 setState()해서 넣어줘
    } catch (err) {
        console.log(err);
    }
};

// 페이지 랜더링 시 실행
useEffect(() => {
    fetchData1(param1, param2);
    fetchData2("url", { param1, param2 });
}, []);

// axios try catch 반복문
const fetchData2 = async (api, params) => {
    try {
        return await axios.get(api, { params }).then((res) => res.data);
    } catch (err) {
        console.log(err);
    }
};