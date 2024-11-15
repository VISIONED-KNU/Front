import "./Component.css";
import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"

export const Component = ({ className, ...props }) => {

    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleFresh = () => {
        navigate(0); // Navigate to the previous page
    };

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigateToCall = () => {
        navigate("/call"); // Navigate to the App.jsx in the 'call' directory
    };

    const handleNavigateToRoute = () => {
        navigate("/taxi_find");
    };

  return (
      <div className={"div " + className}>
          <BackButton
              onClick={handleGoBack} label="뒤로가기"/>
          <div className="rectangle-9"></div>
          <div className="line-upper"></div>
          <div className="line-middle"></div>
          <div className="line-lower"></div>
          <img
              className="deagu-logo"
              src="deagu-logo.png"
          />
          <div className="call-button-frame">
              <CallButton onClick={handleNavigateToCall}/>
          </div>
          <div className="show-small-text">도착지를 듣고있어요.</div>
          <div className="below_dest">아래 도착지가 맞나요?</div>
          <div className="destination">동대구역</div>

          <img className="mic" src="mic.png"/>

          <button className="div6"
                  onClick={handleNavigateToRoute} style={{cursor: "pointer"}}> 예
          </button>
          <button className="div7"
                  onClick={handleFresh} style={{cursor: "pointer"}}> 아니오
          </button>

      </div>
  );
};
