import styles from "./Table.module.css";
import { useState } from "react";

function Table({ tableData }) {
    const [sortedType, setSortedType] = useState("date"); // 정렬 타입 useState 선언
    let data = [...tableData].sort((a, b) => {
        if (sortedType == "date") return (new Date(b[sortedType]).getTime() - new Date(a[sortedType]).getTime()); // 날짜 정렬
        else return b[sortedType] - a[sortedType]; // 이외 값에 대해 내림차순 정렬
    });

    return (
        /* table 태그가 thead와 tbody를 감싸고, 각 하위 태그는 tr, th 와 tr, td로 구성된다 
           tr은 table-row의 약자로 가로줄을 의미하며, 왼쪽정렬이 기본값이다.
           th은 table-head의 약자로 표의 제목을 담으며, bold & 중앙정렬이 기본값이다.
           td는 table data로 셀을 담는 역할로, tr와 동일하게 기본값이 왼쪽정렬이다.

           table 속성 중 {colspan,rowspan}='2'은 각각 가로와 세로줄의 셀을 합치는 개수를 지정한다.
           cellpadding='10'은 셀과 경계선 사이의 여백을, cellspacing='10' 셀과 셀 사이의 여백
           align='center'은 셀 가로줄의 정렬을, valign은 셀 세로줄의 정렬을 설정할 수 있다.
        */
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.dataTitle}>Title</th>
                        <th className={styles.dataTitle} onClick={() => setSortedType("count")}>Count</th>
                        <th className={styles.dataTitle} onClick={() => setSortedType("date")}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td className={styles.dataType}>
                                    {data.title.length > 10
                                        ? data.title.substr(0, 6).concat("...")
                                        : data.title}
                                </td>
                                <td className={styles.dataType}>{data.cont}</td>
                                <td className={styles.dataType}>{data.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;