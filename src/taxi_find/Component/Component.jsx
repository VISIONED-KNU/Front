import "./Component.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"
import React, {useState} from "react";


export const Component = ({ className, ...props }) => {

    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigateToCall = () => {
        navigate("/call"); // Navigate to the App.jsx in the 'call' directory
    };

    const handleNavigateToFound = () => {
        navigate("/taxi_found"); // Update this path if "App.jsx" has a different route, e.g., "/app"
    };

    return (
        <div className={"div " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png"
            />
            <BackButton
                onClick={handleGoBack} label="뒤로가기"/>
            <div className="call-button-frame">
                <CallButton onClick={handleNavigateToCall}/>
            </div>
            <div className="line-upper"></div>
            <div className="line-lower"></div>

            <div className="show-big-text">
                <br/>
                주위에 있는
                <br/>
                택시를
                <br/>
                호출할까요?
            </div>

            <button className="div6"
                onClick={handleNavigateToFound} style={{cursor: "pointer"}}> 예</button>
            <button className="div7" onClick={handleGoBack} style={{cursor: "pointer"}}>아니오</button>
            <img className="image-13" src="deaguro.png"/>
        </div>
    );
};
