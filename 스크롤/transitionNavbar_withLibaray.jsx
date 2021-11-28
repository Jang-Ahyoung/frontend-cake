import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useHistory } from "react-router-dom";
import { useScrollDirection } from 'react-use-scroll-direction'; // 스크롤 방향 감지를 위한 라이브러리 설치

function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    const { isScrollingUp, isScrollingDown } = useScrollDirection();
    const transitionNavBar = () => {
        if (window.scrollY > 100 || isScrollingUp) handleShow(true); // 스크롤 올리면 navbar 표시
        else handleShow(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [isScrollingUp, isScrollingDown]) // 스크롤 변화 탐지될때 마다

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