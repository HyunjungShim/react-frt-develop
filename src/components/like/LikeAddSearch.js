import { useNavigate } from "react-router-dom";
export default function LikeAddSearch() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  return (
    <>
      <div id="app">
        <div className="ai-search-main-page l-page">
          <div className="l-page-top">
            <div className="header">
              <button
                type="button"
                className="btn back-btn"
                onClick={moveTo(-1)}
              >
                <span className="txt-hidden">뒤로 가기</span>
                <i className="ico ico-arrow-back"></i>
              </button>
              <h1 className="hd-title">관심종목 추가</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="bd-section intro-section">
                <h2 className="section-ttl">어떤 종목을 추가할까요?</h2>
                <div className="search-bar-wrap">
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="종목을 입력하세요."
                      className="inp"
                    />
                    <button type="button" className="btn">
                      <span className="txt-hidden">검색하기</span>
                      <img
                        src="assets/images/icon/icon-search.svg"
                        alt="돋보기 아이콘"
                        className="icon icon-26"
                      />
                    </button>
                  </div>
                  <div className="search-list-wrap">
                    <ul className="search-list-box">
                      <li
                        className="search-list"
                        onclick="location.href='ai-search-chart.html';"
                      >
                        <span className="color-txt">검색어</span>입니다
                      </li>
                      <li
                        className="search-list"
                        onclick="location.href='ai-search-chart.html';"
                      >
                        <span className="color-txt">검색어</span>입니다
                      </li>
                      <li
                        className="search-list"
                        onclick="location.href='ai-search-chart.html';"
                      >
                        <span className="color-txt">검색어</span>입니다
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="current-search-wrap">
                  <h2 className="title">사람들이 많이 보고 있어요</h2>
                  <div className="btn-grp">
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">삼성전자</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">SK 하이닉스</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">기아</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">POSCO 홀딩스</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">삼성전자</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">SK 하이닉스</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">기아</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn arrow-btn bd-arrow-btn"
                    >
                      <span className="txt">POSCO 홀딩스</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                  </div>
                </div>
              </section>
              <section className="section">
                <img
                  src="assets/images/img/img-ai-search-main.png"
                  alt="보유종목 예측 이미지"
                  className="page-img"
                />
              </section>
            </div>
          </div>

          <div className="l-page-bottom"></div>
        </div>
      </div>
    </>
  );
}
