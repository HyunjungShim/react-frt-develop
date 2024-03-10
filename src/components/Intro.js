import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Intro() {
  const navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [position, setPosition] = useState(8); // 슬라이더 초기 위치
  const swipeCircleRef = useRef(null); // 슬라이더 ref
  const swipeButtonRef = useRef(null); // 버튼 ref

  const handleDragStart = (event) => {
    setIsDragging(true);
    const clientX =
      event.type === "mousedown" ? event.clientX : event.touches[0].clientX;
    setStartX(clientX);
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;
    const clientX =
      event.type === "mousemove" ? event.clientX : event.touches[0].clientX;
    const moveX = clientX - startX;
    const swipeButtonWidth = swipeButtonRef.current.offsetWidth;
    const swipeCircleWidth = swipeCircleRef.current.offsetWidth;
    const slideMovementTotal = swipeButtonWidth - swipeCircleWidth - 8;
    let newPos = moveX + 8;

    newPos = Math.max(8, Math.min(newPos, slideMovementTotal + 8)); // 범위 제한
    setPosition(newPos);

    // slide-bg와 slide-text의 투명도 업데이트
    const slidePercent = 1 - (newPos - 8) / slideMovementTotal;
    document.querySelector(".slide-text").style.opacity = slidePercent;
    document.querySelector(".slide-bg").style.opacity = 1 - slidePercent;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const swipeButtonWidth = swipeButtonRef.current.offsetWidth;
    const swipeCircleWidth = swipeCircleRef.current.offsetWidth;
    const slideMovementTotal = swipeButtonWidth - swipeCircleWidth - 8;

    if (position - 8 >= slideMovementTotal) {
      // 이동이 충분하면 액션 실행
      navigate("/main");
    } else {
      setPosition(8); // 원래 위치로 복귀
    }
  };
  return (
    <>
      <div id="app">
        <div className="splash-view">
          <figure className="logo-circle">
            <img
              src="assets/images/logo/logo-symbol.png"
              alt="프랙탈 솔루션 로고 이미지"
              className="logo-img"
            />
          </figure>
        </div>
        <div className="intro-page l-page">
          <div className="l-page-top"></div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="intro-section">
                <figure className="logo-circle">
                  <img
                    src="assets/images/logo/logo-symbol.png"
                    alt="프랙탈 솔루션 로고 이미지"
                    className="logo-img"
                  />
                  <span className="logo-circle-shadow"></span>
                </figure>
                <h1 className="ttl">Comfort & Ease</h1>
                <p className="ttl-desc">
                  국내 유일 주식/코인 AI 가격 예측 솔루션
                </p>
              </section>
            </div>
          </div>

          <div className="l-page-bottom">
            <div className="page-btn-wrap">
              <div
                id="swipe-button"
                ref={swipeButtonRef}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onMouseMove={handleDragMove}
                onTouchMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onTouchEnd={handleDragEnd}
                // style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <span className="slide-bg"></span>
                <span className="slide-text" draggable={false}>
                  서비스 둘러보기
                </span>
                <div
                  id="swipe-circle"
                  ref={swipeCircleRef}
                  style={{ left: `${position}px`, cursor: "grab" }}
                >
                  <img
                    src="assets/images/icon/icon-arrow-right.svg"
                    className="icon icon-28"
                    alt="바로가기 아이콘"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="opt-btns">
                <Link to="/signIn">
                  <button type="button" className="btn">
                    로그인
                  </button>
                </Link>
                <Link to="/signUp">
                  <button type="button" className="btn">
                    회원가입
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="user-modal" className="modal-wrapper">
        <div
          className="modal-overlay"
          onclick="closeModal('user-modal');"
        ></div>
        <div className="custom-modal system-modal">
          <div className="modal-icon">
            <img
              src="assets/images/icon/icon-modal-checked.svg"
              alt="모달 아이콘"
              className="icon icon-32"
            />
          </div>
          <div className="modal-content-wrap">
            <h2 className="modal-ttl">회원 전용 서비스입니다</h2>
            <div className="modal-content">
              <p className="modal-ttl type-md">
                프렉탈 솔루션에 가입하시겠습니까?
              </p>
              <p className="modal-desc">
                프렉탈 솔루션에 가입하셔서 <br />
                누구보다 편안한 투자를 경험해보세요!
              </p>
            </div>
          </div>
          <div className="modal-btn-wrap">
            <button
              type="button"
              onclick="closeModal('user-modal');"
              className="btn gray-bd-btn"
            >
              아니오
            </button>
            <button
              type="button"
              onclick="location.href='sign-up.html';"
              className="btn theme-solid-btn"
            >
              예
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
