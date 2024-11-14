import "./Component.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import React, {useState} from "react";

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
        navigate("/route"); // Update this path if "App.jsx" has a different route, e.g., "/app"
    };

  return (
      <div className={"div " + className}>
          <BackButton
              onClick={handleGoBack} label="뒤로가기"/>
          <div className="rectangle-9"></div>
          <div className="line-2"></div>
          <div className="line-9"></div>
          <img
              className="image-removebg-preview-19-3"
              src="image-removebg-preview-19-20.png"
          />
          <div className="depth-3-frame-2">
              <span>
                  <CallButton
                      onClick={handleNavigateToCall} label="안내원 도움 요청"/>
              </span>{" "}
          </div>
          <div className="div3">도착지를 듣고있어요.</div>
          <div className="div4">아래 도착지가 맞나요?</div>
          <div className="div5">동대구역</div>
          <div className="ellipse-1"></div>
          <div className="ellipse-2"></div>
          <div className="ellipse-4"></div>
          <div className="ellipse-6"></div>
          <div className="ellipse-7"></div>
          <div className="ellipse-5"></div>
          <div className="ellipse-3"></div>
          <div className="rectangle-10"></div>
          <div className="rectangle-11"></div>
          <button className="div6" onClick={handleNavigateToRoute} style={{cursor: "pointer"}}> 예</button>
          <button className="div7" onClick={handleFresh} style={{cursor: "pointer"}}> 아니오</button>
      </div>
  );
};
