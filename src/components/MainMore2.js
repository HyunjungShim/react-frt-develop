import { useNavigate } from "react-router-dom";
export default function MainMore2() {
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
        <div className="main-more-02-page l-page">
          <div className="l-page-top">
            <div className="header">
              <button
                type="button"
                className="btn back-btn"
                onClick={moveTo("/main")}
              >
                <span className="txt-hidden">뒤로 가기</span>
                <i className="ico ico-arrow-back"></i>
              </button>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="page-title-wrap">
                <h1 className="title">인기 종목 예측 현황</h1>
                <p className="title-desc">현재 문의가 많은 종목이에요.</p>
              </div>
              <section className="section">
                <ul className="list-item-grp">
                  <li className="list-item">
                    <span className="badge type-hold">보유중</span>
                    <h3 className="ttl">이수페타시스</h3>
                    <button
                      type="button"
                      className="btn"
                      onClick={moveTo("/ai-search-chart")}
                    >
                      <span className="percent-txt type-blue">- 00.00%</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                  </li>
                  <li className="list-item">
                    <span className="badge">관망중</span>
                    <h3 className="ttl">센서뷰</h3>
                    <button
                      type="button"
                      className="btn"
                      onClick={moveTo("/ai-search-chart")}
                    >
                      <span className="percent-txt type-red">+ 00.00%</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                  </li>
                  <li className="list-item">
                    <span className="badge type-hold">보유중</span>
                    <h3 className="ttl">어보브반도체</h3>
                    <button
                      type="button"
                      className="btn"
                      onClick={moveTo("/ai-search-chart")}
                    >
                      <span className="percent-txt type-red">+ 00.00%</span>
                      <img
                        src="assets/images/icon/icon-arrow-right-sm.svg"
                        className="icon icon-16"
                        alt="바로가기 아이콘"
                      />
                    </button>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <div className="l-page-bottom"></div>
        </div>
      </div>
    </>
  );
}
