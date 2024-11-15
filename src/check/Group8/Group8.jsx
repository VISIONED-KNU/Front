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
          <img
              className="deagu-logo"
              src="deagu-logo.png"
          />
          <div className="depth-2-frame-0">
            <CallButton
                onClick={handleNavigateToPrint} label="약도 출력"/>
          </div>
          <div className="depth-4-frame-9">
            비용: 1500원 | 환승 0회 | 도보 17분
            <br/>
            동대구역{" "}
          </div>
          <img
              className="image-removebg-preview-21-1"
              src="image-removebg-preview-21-10.png"
          />
          <div className="show-middle-text">
              선택한 경로를 확인하세요.{" "}
          </div>
          <div className="depth-2-frame-2">
            <div className="depth-3-frame-03">
              <div className="div3">
                <br/>
                신천역까지 걸어가기(12분)
                <br/>
                <br/>
                공고네거리 방향으로 직진{" "}
              </div>
            </div>
          </div>
          <img
              className="image-removebg-preview-21-2"
              src="image-removebg-preview-21-20.png"
          />
          <div className="image-3"></div>
          <div className="depth-2-frame-4">
            <div className="depth-3-frame-03">
              <div className="_2-3-2">
                <br/>
                문양행 방면 2호선 탑승,
                <br/>
                <br/>
                수성시장역 하차(3분, 2정거장){" "}
              </div>
            </div>
          </div>
          <div className="depth-2-frame-6">
            <div className="depth-3-frame-03">
              <div className="_5">
                <br/>
                수성시장역 하차 후 5분 걸어가기
                <br/>
                <br/>
                2번 출구에서 수성네거리 방향{" "}
              </div>
            </div>
          </div>

        <img className="image-9" src="image-90.png"/>
        <div className="group-72">
          <img
              className="image-removebg-preview-21-3"
              src="image-removebg-preview-21-30.png"
          />
          <img
              className="image-removebg-preview-21-4"
              src="image-removebg-preview-21-40.png"
          />
          <BackButton
              onClick={handleGoBack} label="뒤로가기"/>
        </div>
        <div className="call-button-frame">
            <div className="div6">
            <span>
              <CallButton
                  onClick={handleNavigateToCall} label="안내원 도움 요청"></CallButton>
            </span>{" "}
            </div>
        </div>
      </div>
  );
};
