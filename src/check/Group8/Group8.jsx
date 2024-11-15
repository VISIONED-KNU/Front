import "./Group8.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"
import React from "react";

export const Group8 = ({ className, ...props }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleNavigateToCall = () => {
    navigate("/call"); // Navigate to the App.jsx in the 'call' directory
  };

  const handleNavigateToPrint = () => {
    navigate("/print"); // Navigates to the App.jsx in the "check" directory
  };

  return (
      <div className={"group-8 " + className}>
          <div className="line-upper"></div>
          <div className="line-middlelower2"></div>
          <img className="deagu-logo"
               src="deagu-logo.png"/>

          <div className="show-middle-text">
              선택한 경로를 확인하세요.{" "}
          </div>

          <div className="depth-4-frame-9">
              비용: 1500원 | 환승 0회 | 도보 17분
              <br/>
              동대구역
          </div>


          <div className="depth-2-frame-2">
              <div className="depth-3-frame-03">
                  <div className="text-box">
                      <br/>
                      신천역까지 걸어가기(12분)
                      <br/>
                      <br/>
                      공고네거리 방향으로 직진{" "}
                  </div>
                  <img className="image-insert" src="walk.png"/>
              </div>
          </div>


          <div className="depth-2-frame-4">
              <div className="depth-3-frame-03">
                  <div className="text-box">
                      <br/>
                      문양행 방면 2호선 탑승,
                      <br/>
                      <br/>
                      수성시장역 하차(3분, 2정거장){" "}
                  </div>
                  <img className="image-insert" src="train-line2.png"/>
              </div>
          </div>

          <div className="depth-2-frame-6">
              <div className="depth-3-frame-03">
                  <div className="text-box">
                      <br/>
                      수성시장역 하차 후 5분 걸어가기
                      <br/>
                      <br/>
                      2번 출구에서 수성네거리 방향{" "}
                  </div>
                  <img className="image-insert" src="walk.png"/>
              </div>
          </div>

          <BackButton onClick={handleGoBack}/>
          <div className="goto_print">
              <CallButton
                  onClick={handleNavigateToPrint} label="약도 출력"/>
          </div>
          <div className="print-call-button-frame">
              <CallButton onClick={handleNavigateToCall}></CallButton>
          </div>
      </div>
  );
};
