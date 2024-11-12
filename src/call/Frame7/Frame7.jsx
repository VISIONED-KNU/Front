import React from "react";
import { useNavigate } from "react-router-dom";
import "./Frame7.css";

export const Frame7 = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigateToMain = () => {
        navigate("/");
    };

    return (
    <div className={"frame-7 " + className}>
      <div className="rectangle-1"></div>
      <img
        className="image-removebg-preview-19-2"
        src="image-removebg-preview-19-20.png"
      />
      <div className="depth-4-frame-5">
        <div className="div">
          <span>
            <span className="div-span">
              <br />
            </span>
            <span onClick={handleNavigateToMain} className="div-span2">처음으로</span>
          </span>{" "}
        </div>
      </div>
      <div className="image-7"></div>
      <div className="image-8"></div>
      <div className="depth-4-frame-24">
        <div className="div2">
          <br />
          담당 정류장 안내원과
          <br />
          <br />
          <br />
          전화연결 중입니다.
          <br />
          <br />
          <br />
          잠시만 기다려주세요.{" "}
        </div>
      </div>
      <div className="line-3"></div>
      <img className="image-10" src="image-100.png" />
    </div>
  );
};
