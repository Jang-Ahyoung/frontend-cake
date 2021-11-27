import React, { useState, useEffect } from 'react';
import requests from './service/request'; // request에 api 작성해두어 변수로 넘겨줄수 있다

export default function fetchData_React() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchDocumentaries);
            setData(
                // request.data.data // 기본 setStates에 데이터 담기
                response.data.data[
                Math.floor(Math.random() * response.data.data.length - 1) // 외 다양한 접근 가능 
                ]
            );
            return response;
        }
        fetchData();
    }, [])

    return (
        <div>fetchData</div>
    )
}