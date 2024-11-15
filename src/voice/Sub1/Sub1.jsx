import "./Sub1.css";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"

export const Sub1 = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleNavigateToCall = () => {
    navigate("/call"); // Navigate to the App.jsx in the 'call' directory
  };

  const handleNavigateToRouteOption = () => {
    navigate("/route_option"); // Update this path if "App.jsx" has a different route, e.g., "/app"
  };

  return (
    <div className={"sub-1 " + className}>
      <div className="group-3">
        <div className="group-2">
          <div className="group-1">
            <div className="line-upper"></div>
            <div className="line-lower"></div>
              <BackButton
                  onClick={handleGoBack} label="뒤로가기"/>
            <div className="rectangle-2">
              <button className="record-button" onClick={handleNavigateToRouteOption} style={{cursor: "pointer"}}>
                버튼을 누르고
                <br/>
                도착지를 말해주세요.{" "}
              </button>
            </div>
            <div className="rectangle-4">
              <input
                  type="text"
                  className="div4"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="  목적지"
              />
            </div>
            <img
                className="deagu-logo"
                src="deagu-logo.png"
            />
            <img className="image" src="image0.png"/>
          </div>
        </div>
        <div className="call-button-frame">
            <div className="div">
              <span>
                  <CallButton
                      onClick={handleNavigateToCall} label="안내원 도움 요청"/>
              </span>{" "}
            </div>
        </div>
      </div>
    </div>
  );
};
