import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TradingViewWidegt from "./TradingViewWidegt";
export default function AIInvestorDetail() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  const [circleValue, setCircleValue] = useState(0);

  useEffect(() => {
    // 0.1초(100ms) 후에 value를 75로 설정
    setTimeout(() => {
      setCircleValue(75);
    }, 100);
  }, []);
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");
  return (
    <>
      <div id="app">
        <div className="ai-investor-main-page l-page">
          <div className="l-page-top">
            <div className="header">
              <button
                type="button"
                className="btn back-btn"
                onClick={moveTo("/ai-investor-main")}
              >
                <span className="txt-hidden">뒤로 가기</span>
                <i className="ico ico-arrow-back"></i>
              </button>
              <h1 className="hd-title">최근 투자 종목</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="shadow-box">
                <div
                  className="user-item"
                  //   onclick="location.href='ai-investor-detail.html';"
                >
                  <figure className="thumbnail">
                    <img
                      src="assets/images/sample/img-sample-ali.png"
                      alt="프로필 사진"
                      className="thumbnail-img"
                    />
                  </figure>
                  <h3 className="name">Ali Morshediou</h3>
                  <div className="mg-left">
                    <button type="button" className="btn arrow-btn">
                      <span className="badge type-blue">12조원</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-ttl-wrap">
                  <span className="gray-txt">23.06 기준</span>
                  <div className="search-bar-wrap type-select">
                    <div className="select-bar">
                      <span className="txt">애플 APPLE.INC</span>
                      <img
                        src="assets/images/icon/icon-select-arrow.svg"
                        alt="종목 선택 아이콘"
                        className="icon icon-12"
                      />
                    </div>
                    <div className="search-list-wrap">
                      <ul className="search-list-box">
                        <li className="search-list">종목명</li>
                        <li className="search-list">종목명</li>
                        <li className="search-list">종목명</li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="chart-ttl">999,999원</h2>
                </div>
                <div className="chart-area" style={{ height: "600px" }}>
                  <TradingViewWidegt symbol={symbol} />
                </div>
              </div>
            </div>
          </div>

          <div className="l-page-bottom">
            <div className="info-white-box">
              <div className="box-content">
                <div className="js-circle">
                  <div className="bar">
                    <CircularProgressbar
                      value={circleValue}
                      strokeWidth={9}
                      styles={buildStyles({
                        pathColor: `#F5222D`,
                        pathTransitionDuration: 1,
                        trailColor: "#FAE9EA",
                      })}
                    ></CircularProgressbar>
                    <div class="box">
                      <span class="label">상승확률</span>
                      <b class="percent red-txt">75%</b>
                    </div>
                  </div>
                </div>
                <div className="list-grp">
                  <dl className="detail-list">
                    <dt className="ttl">20일 기대수익률</dt>
                    <dd className="detail">
                      <span className="red-txt">+ 00.00%</span>
                    </dd>
                  </dl>
                  <dl className="detail-list">
                    <dt className="ttl">리스크 전략</dt>
                    <dd className="detail">
                      57,000원 이탈시 <span className="blue-txt">매도</span>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="box-btn-wrap">
                <button
                  type="button"
                  onClick={moveTo("/detail-main")}
                  className="btn btn-w100 theme-solid-btn"
                >
                  세부 예측 분석 확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
