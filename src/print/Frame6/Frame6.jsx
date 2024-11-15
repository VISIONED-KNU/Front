import "./Frame6.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"

export const Frame6 = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigateToCall = () => {
        navigate("/call"); // Navigate to the App.jsx in the 'call' directory
    };

  return (
      <div className={"frame-6 " + className}>
          <img
              className="deagu-logo"
              src="deagu-logo.png"
          />
          <div className="line-upper"></div>
          <div className="line-lower"></div>
          <div className="div3">
              <br/>
              약도가 출력되었습니다.
              <br/>
              하단의 출력창을
              <br/>
              확인하세요.{" "}
          </div>

          <div className="call-button-frame">
              <div className="div2">
            <span>
              <CallButton
                  onClick={handleNavigateToCall} label="안내원 도움 요청"/>
            </span>{" "}
              </div>
          </div>
          <BackButton
              onClick={handleGoBack} label="뒤로가기"/>
      </div>
  );
};
