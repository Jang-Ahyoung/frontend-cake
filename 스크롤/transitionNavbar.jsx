import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useHistory } from "react-router-dom";

function Navbar() {
    const [show, handleShow] = useState(false); // 네브바 show 여부 변경을 위한 변수
    const history = useHistory(); // 페이지 이동 history 선언
    const transitionNavBar = () => {
        if (window.scrollY > 100) handleShow(true);
        else handleShow(false);
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