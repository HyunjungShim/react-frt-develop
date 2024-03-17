import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
export default function SignUp() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const moveTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <div id="app">
        <div className="signup-page l-page">
          <div className="l-page-top">
            <header className="header">
              <button type="button" className="btn back-btn" onClick={goBack}>
                <span className="txt-hidden">뒤로 가기</span>
                <i class="ico ico-arrow-back"></i>
              </button>
            </header>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="left-title-wrap">
                <h1 className="title">
                  Comfort & Ease <br />
                  회원가입
                </h1>
                <p className="title-desc">회원 정보를 입력해주세요.</p>
              </div>
              <div className="form-item-grp">
                <div className="form-item">
                  <label className="form-label">아이디</label>
                  <div className="form-inp-wrap">
                    <input
                      type="text"
                      placeholder="아이디를 입력하세요"
                      className="form-inp"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label">비밀번호</label>
                  <div className="form-inp-wrap">
                    <input
                      type="password"
                      autoComplete="new-password"
                      placeholder="비밀번호를 입력하세요"
                      className="form-inp"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label">비밀번호 확인</label>
                  <div className="form-inp-wrap">
                    <input
                      type="password"
                      autoComplete="new-password"
                      placeholder="비밀번호를 재입력하세요"
                      className="form-inp"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label">이름</label>
                  <div className="form-inp-wrap">
                    <input
                      type="text"
                      placeholder="이름을 입력하세요"
                      className="form-inp"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label">휴대폰번호</label>
                  <div className="form-inp-wrap">
                    <input
                      type="text"
                      placeholder="숫자만 입력하세요"
                      className="form-inp"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label">코드번호</label>
                  <div className="form-inp-wrap">
                    <input
                      type="text"
                      placeholder="코드번호를 입력하세요"
                      className="form-inp"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label">추가 입력란</label>
                  <div className="form-inp-wrap">
                    <input
                      type="text"
                      placeholder="추가 입력란"
                      className="form-inp type-warning"
                    />

                    <p className="form-msg type-warning">
                      입력해야할 데이터에 대한 설명 문구
                    </p>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label">추가 입력란</label>
                  <div className="form-inp-wrap">
                    <input
                      type="text"
                      placeholder="추가 입력란"
                      className="form-inp"
                    />
                    <p className="form-msg">
                      입력해야할 데이터에 대한 설명 문구
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="l-page-bottom">
            <div className="page-btn-wrap">
              <label className="checkbox-item">
                <input id="agree" type="checkbox" className="checkbox-inp" />
                <label htmlFor="agree" className="checkbox"></label>
                <span className="checkbox-txt">
                  본 솔루션을 통한 투자의 책임은 본인에게 있습니다.
                </span>
              </label>
              <button
                type="button"
                onClick={moveTo("/main")}
                className="btn btn-w100 theme-solid-btn"
              >
                회원가입 완료
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="user-modal" className="modal-wrapper">
        <div
          className="modal-overlay"
          // onclick="closeModal('user-modal');"
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
              // onclick="closeModal('user-modal');"
              className="btn gray-bd-btn"
            >
              아니오
            </button>
            <Link to="/signUp">
              <button type="button" className="btn theme-solid-btn">
                예
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
