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
                간편한 길안내와
                <br/>
                택시 호출이
                <br/>
                필요하시나요?
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
                <button className="test-button" onClick={handleNavigateToTest}>test</button>
            </div>
            <div className="line-upper"></div>
            <div className="line-lower"></div>
        </div>
    );
};
