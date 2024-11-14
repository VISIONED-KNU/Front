import "./Frame6.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";

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
              className="image-removebg-preview-19-2"
              src="image-removebg-preview-19-20.png"
          />
          <div className="line-2"></div>
          <div className="div3">
              <br/>
              약도가 출력되었습니다.
              <br/>
              하단의 출력창을
              <br/>
              확인하세요.{" "}
          </div>
          <div className="line-3"></div>
          <div className="depth-3-frame-1">
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
