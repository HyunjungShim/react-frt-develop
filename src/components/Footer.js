import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");

  const [modal, setModal] = useState(false);
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  useEffect(() => {
    console.log(location);
    setCurrentPath(location.pathname);
    console.log("location", location.pathname, "currentPath", currentPath);
  });
  useEffect(() => {
    const modalElement = document.getElementById("user-modal");
    if (modal) {
      // 첫 번째 requestAnimationFrame은 브라우저에게 CSS 변경을 준비하도록 합니다.
      requestAnimationFrame(() => {
        // 두 번째 requestAnimationFrame은 실제 CSS 변경이 적용되도록 합니다.
        requestAnimationFrame(() => {
          if (modalElement) {
            modalElement.classList.add("active");
          }
        });
      });
    } else {
      if (modalElement) {
        modalElement.classList.remove("active");
      }
    }
  }, [modal]);

  return (
    <>
      <div className="l-page-bottom">
        <div className="nav-btns">
          <button
            type="button"
            className={"nav-btn " + (currentPath == "/main" ? "active" : "")}
            onClick={moveTo("/main")}
          >
            <span className="icon-box">
              <img
                src="assets/images/icon/icon-nav-home-on.svg"
                alt="홈 네비게이션 아이콘"
                className="icon icon-on"
              />
              <img
                src="assets/images/icon/icon-nav-home.svg"
                alt="홈 네비게이션 아이콘"
                className="icon icon-off"
              />
            </span>
            <span className="txt">홈</span>
          </button>
          <button
            type="button"
            className={"nav-btn " + (currentPath == "/ai-main" ? "active" : "")}
            onClick={moveTo("/ai-main")}
          >
            <span className="icon-box">
              <img
                src="assets/images/icon/icon-nav-ai-on.svg"
                alt="AI 예측 네비게이션 아이콘"
                className="icon icon-on"
              />
              <img
                src="assets/images/icon/icon-nav-ai.svg"
                alt="AI 예측 네비게이션 아이콘"
                className="icon icon-off"
              />
            </span>
            <span className="txt">AI 예측</span>
          </button>
          <button
            type="button"
            className="nav-btn"
            // className={"nav-btn " + (currentPath == "/ai-main" ? "active" : "")}
            // onClick={moveTo("/ai-main")}
          >
            <span className="icon-box">
              <i className="ico icon-on ico-like-list-on"></i>
              <i className="ico icon-off ico-like-list"></i>
            </span>
            <span className="txt">관심종목</span>
          </button>
          <button
            type="button"
            className={
              "nav-btn " + (currentPath == "/signal-main" ? "active" : "")
            }
            onClick={moveTo("/signal-main")}
          >
            <span className="icon-box">
              <i className="ico icon-on ico-signal-on"></i>
              <i className="ico icon-off ico-signal"></i>
            </span>
            <span className="txt">신호</span>
          </button>
          <button
            type="button"
            className="nav-btn "
            onClick={() => setModal(true)}
          >
            <span className="icon-box">
              <img
                src="assets/images/icon/icon-nav-my-on.svg"
                alt="AI 예측 네비게이션 아이콘"
                className="icon icon-on"
              />
              <img
                src="assets/images/icon/icon-nav-my.svg"
                alt="AI 예측 네비게이션 아이콘"
                className="icon icon-off"
              />
            </span>
            <span className="txt">소통</span>
          </button>
        </div>
      </div>
      {modal && (
        <div id="user-modal" className={"modal-wrapper "}>
          <div className="modal-overlay" onClick={() => setModal(false)}></div>
          <div className="custom-modal system-modal">
            <div className="modal-icon">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/icon/icon-modal-checked.svg"
                }
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
                className="btn gray-bd-btn"
                onClick={() => setModal(false)}
              >
                아니오
              </button>
              <button
                type="button"
                className="btn theme-solid-btn"
                onClick={moveTo("/signUp")}
              >
                예
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
