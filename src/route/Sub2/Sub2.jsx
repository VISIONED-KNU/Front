import "./Sub2.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";

export const Sub2 = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

  const handleNavigateToCall = () => {
    navigate("/call"); // Navigate to the App.jsx in the 'call' directory
  };

  const handleNavigateToCheck = () => {
    navigate("/check"); // Navigates to the App.jsx in the "check" directory
  };

    return (
    <div className={"sub-2 " + className}>
      <div className="rectangle-7"
           onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}></div>
      <div className="rectangle-8"
           onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}></div>
      <img
        className="image-removebg-preview-19-2"
        src="image-removebg-preview-19-20.png"
      />
      <div className="rectangle-5"></div>
      <div className="depth-4-frame-5">
        <div className="div">
          <br />현 위치(경북대 정문){" "}
        </div>
      </div>
      <div className="rectangle-6"></div>
      <div className="depth-4-frame-6">
        <div className="div">
          <br />
          수성코오롱하늘채{" "}
        </div>
      </div>
      <div className="depth-4-frame-52">
        <div className="div2">
          <br />
          원하는 경로를 선택하세요.{" "}
        </div>
      </div>
      <div className="line-4"></div>
      <div className="depth-4-frame-12">
        <div className="_1500-0-5">
          <span>
            <span className="_1500-0-5-span">
              <br />
            </span>
            <span className="_1500-0-5-span2">
              비용: 1500원 | 환승 0회 | 도보 5분
              <br />
            </span>
          </span>{" "}
        </div>
      </div>
      <div className="depth-4-frame-14">
        <div className="_1500-1-17">
          <span>
            <span className="_1500-1-17-span">
              <br />
            </span>
            <span className="_1500-1-17-span2">
              비용: 1500원 | 환승 1회 | 도보 17분
              <br />
            </span>
          </span>{" "}
        </div>
      </div>
      <div className="_65">(65세 이상 무료) </div>
      <div className="div3">동일초등학교 앞 하차 </div>
      <div className="div4">수성시장역 하차 </div>
      <img
        className="image-removebg-preview-23-1"
        src="image-removebg-preview-23-10.png"
      />
      <img
        className="image-removebg-preview-24-1"
        src="image-removebg-preview-24-10.png"
      />
      <div className="rectangle-52"></div>
      <BackButton
          onClick={handleGoBack} label="뒤로가기"/>
        <div className="depth-3-frame-2">
          <div className="div5">
            <span>
                <CallButton
                 onClick={handleNavigateToCall} label="안내원 도움 요청"/>
            </span>{" "}
          </div>
      </div>
    </div>
  );
};
