import React from "react";
import { useNavigate } from "react-router-dom";
import TypewriterText from "./TypewriterText";
import CallButton from "../share/CallButton.jsx";
import "./Main.css";
import "../share/allshared.css";

export const Main = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/choose");
    };

    const handleNavigateToCall = () => {
        navigate("/call");
    }

    const handleNavigateToTest = () => {
        navigate("/test");
    }

    return (
        <div className={"main " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png"
            />
            <div className="show-big-text">
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
            <div className="call-button-frame">
                <CallButton onClick={handleNavigateToCall}/>
            </div>
            <div className="test-button-frame">
                <CallButton onClick={handleNavigateToTest} label="test"/>
            </div>
            <div className="line-upper"></div>
            <div className="line-lower"></div>
        </div>
    );
};
