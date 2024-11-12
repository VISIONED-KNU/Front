import "./Sub1.css";
import { useNavigate } from "react-router-dom";
import { useState} from "react";

export const Sub1 = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

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
    <div className={"sub-1 " + className}>
      <div className="group-3">
        <div className="group-2">
          <div className="group-1">
            <div className="rectangle-1"></div>
            <div className="rectangle-2"></div>
            <div className="rectangle-4"></div>
            <div className="depth-4-frame-1">
              <div className="div" onClick={handleGoBack} style={{ cursor: "pointer" }}>
                <span>
                  <span className="div-span">
                    <br />
                  </span>
                  <span className="div-span2">뒤로가기</span>
                </span>{" "}
              </div>
            </div>
            <div className="depth-4-frame-2">
              <div className="div2" onClick={handleNavigateToRoute} style={{cursor: "pointer"}}>
                <br/>
                버튼을 누르고
                <br/>
                <br/>
                도착지를 말해주세요.{" "}
              </div>
            </div>
            <img
                className="image-removebg-preview-18-1"
              src="image-removebg-preview-18-10.png"
            />
            <img
              className="image-removebg-preview-19-2"
              src="image-removebg-preview-19-20.png"
            />
            <img className="image" src="image0.png" />
            <div className="depth-4-frame-4">
              <input
                  type="text"
                  className="div4"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="목적지"
              />
            </div>
          </div>
        </div>
        <div className="depth-3-frame-2">
          <div className="depth-4-frame-0">
            <div className="div">
              <span>
                <span className="div-span3">
                  <br/>
                </span>
                <span onClick={handleNavigateToCall} className="div-span4">안내원 도움 요청하기</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
