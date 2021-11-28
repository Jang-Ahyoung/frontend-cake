import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useHistory } from "react-router-dom";

function Navbar() {
    let beforePosition = 0; // 이전 스크롤 위치 기록하기 위한 변수 생성
    const [show, handleShow] = useState(false);
    const history = useHistory();
    const transitionNavBar = () => {
        if (window.scrollY > 100 || beforePosition > window.scrollY) handleShow(true); // 이전 스크롤 위치와 비교해 스크롤 방향 감지
        else handleShow(false);
        beforePosition = window.scrollY;
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar); // scroll 이벤트 발생할 때 transitionNavBar 함수 실행
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'background'}`}>
            <div>
                <img onClick={() => history.push("/")} src="img/Logo.png" alt="logo"></img>
                <img onClick={() => history.push("/profile")} src="https://img.com/sample" alt="profile"></img>
            </div>
        </div>
    )
}

export default Navbar;