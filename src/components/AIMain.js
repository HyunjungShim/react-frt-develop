import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
export default function AIMain() {
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
        <div className="ai-main-page l-page">
          <div className="l-page-top">
            <div className="header type-lg">
              <h1 className="hd-title type-lg">AI 예측</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="box-grp">
                <div className="shadow-box" onClick={moveTo("/ai-search-main")}>
                  <img
                    src="assets/images/icon/icon-ai-icon-01.svg"
                    alt="종목/증시 예측 아이콘"
                    className="icon icon-36"
                  />
                  <div className="ttl-wrap">
                    <div className="ttl-item">
                      <h3 className="ttl">종목/증시 예측</h3>
                    </div>
                    <p className="ttl-desc">내가 원하는 종목 및 증시를 예측</p>
                  </div>
                  <div className="mg-left">
                    <button type="button" className="btn">
                      <span className="txt-hidden">바로 가기</span>
                      <i className="ico icon-arrow-right-sm"></i>
                    </button>
                  </div>
                </div>
                <div
                  className="shadow-box"
                  onClick={moveTo("/ai-recommend-chart")}
                >
                  <img
                    src="assets/images/icon/icon-ai-icon-02.svg"
                    alt="AI 추천 아이콘"
                    className="icon icon-36"
                  />
                  <div className="ttl-wrap">
                    <div className="ttl-item">
                      <h3 className="ttl">AI 추천</h3>
                      <span className="badge type-blue">국내 최고 예측률</span>
                    </div>
                    <p className="ttl-desc">
                      국내 최고수준의 예측력으로 주가를 예측하여 추천
                    </p>
                  </div>
                  <div className="mg-left">
                    <button type="button" className="btn">
                      <span className="txt-hidden">바로 가기</span>
                      <i className="ico icon-arrow-right-sm"></i>
                    </button>
                  </div>
                </div>
                <div
                  className="shadow-box"
                  onClick={moveTo("/ai-investor-main")}
                >
                  <img
                    src="assets/images/icon/icon-ai-icon-03.svg"
                    alt="세계 헤지펀드사 종목 예측 아이콘"
                    className="icon icon-36"
                  />
                  <div className="ttl-wrap">
                    <div className="ttl-item">
                      <h3 className="ttl">세계 헤지펀드사 종목 예측</h3>
                    </div>
                    <p className="ttl-desc">
                      세계 유명한 투자자 포트폴리오의 주가를 예측
                    </p>
                  </div>
                  <div className="mg-left">
                    <button type="button" className="btn">
                      <span className="txt-hidden">바로 가기</span>
                      <i className="ico icon-arrow-right-sm"></i>
                    </button>
                  </div>
                </div>
                <div
                  className="shadow-box"
                  onClick={moveTo("/detail-elliott-main")}
                >
                  <img
                    src="assets/images/icon/icon-ai-icon-04.svg"
                    alt="세계 헤지펀드사 종목 예측 아이콘"
                    className="icon icon-36"
                  />
                  <div className="ttl-wrap">
                    <div className="ttl-item">
                      <h3 className="ttl">엘리어트 파동</h3>
                      <span className="badge type-blue">국내 유일 기술력</span>
                    </div>
                    <p className="ttl-desc">
                      주가의 변화는 대자연의 법칙에 따라 <br />
                      일정한 규칙을 가지고 반복된다는 이론
                    </p>
                  </div>
                  <div className="mg-left">
                    <button type="button" className="btn">
                      <span className="txt-hidden">바로 가기</span>
                      <i className="ico icon-arrow-right-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
