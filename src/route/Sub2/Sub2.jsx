import "./Sub2.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"

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
            <div className="line-upper"></div>
            <div className="line-uppermiddle"></div>
            <div className="line-lower"></div>

            <img
                className="deagu-logo"
                src="deagu-logo.png"
            />
            <div className="show-middle-text">
                원하는 경로를 선택하세요.
            </div>
            <div className="rectangle-5"></div>
            <div className="depth-4-frame-5">
                <div className="div">
                    <br/>현위치(경북대 정문){" "}
                </div>
            </div>
            <div className="rectangle-6"></div>
            <div className="depth-4-frame-6">
                <div className="div">
                    <br/>
                    수성코오롱하늘채{" "}
                </div>
            </div>

            <div className="rectangle-7"
                 onClick={handleNavigateToCheck} style={{cursor: "pointer"}}>
                    <div className="text-box-1">
                        비용: 1500원
                        <br/>
                        환승 0회
                        <br/>
                        도보 5분
                        <br/>
                        (65세 이상 무료)
                        <br/>
                    </div>
            </div>


            <div className="rectangle-8"
                 onClick={handleNavigateToCheck} style={{cursor: "pointer"}}>
                    <div className="text-box-1">
                        환승 1회
                        <br/>
                        도보 17분
                        <br/>
                        동일초등학교 앞 하차
                        <br/>
                        수성시장역 하차
                    </div>
            </div>

            <img className="image-bus"
                src="bus.png"/>
            <img className="image-train"
                src="train.png"/>


            <BackButton
                onClick={handleGoBack} label="뒤로가기"/>
            <div className="call-button-frame">
                <CallButton onClick={handleNavigateToCall}/>
            </div>
        </div>
    );
};
