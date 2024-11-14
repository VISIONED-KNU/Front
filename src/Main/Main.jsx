import React from "react";
import { useNavigate } from "react-router-dom";
import TypewriterText from "./TypewriterText";
import CallButton from "../share/CallButton.jsx";
import "./Main.css";


export const Main = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/voice");
    };

    const handleNavigateToCall = () => {
        navigate("/call");
    }

    return (
        <div className={"main " + className}>
            <img
                className="image-removebg-preview-19-2"
                src="image-removebg-preview-19-20.png"
            />
            <div className="div2">
                도착지 약도
                <br/>
                출력 서비스를
                <br/>
                시작하겠습니다.{" "}
            </div>
            <div className="depth-3-frame-1">
                <br/>
                <button onClick={handleNavigate} className="navigate-button">
                    시작하기
                </button>
            </div>
            <div className="depth-3-frame-2">
                <CallButton onClick={handleNavigateToCall} label="안내원 도움 요청"/>
            </div>
            <div className="line-5"></div>
            <div className="line-2"></div>
        </div>
    );
};
