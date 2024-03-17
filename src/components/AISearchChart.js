import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TradingViewWidegt from "./TradingViewWidegt";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function AISearchChart() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");
  const [circleValue, setCircleValue] = useState(0);
  useEffect(() => {
    // 0.1초(100ms) 후에 value를 75로 설정
    setTimeout(() => {
      setCircleValue(75);
    }, 100);
  }, []);
  return (
    <>
      <div id="app">
        <div className="ai-search-chart-page chart-page l-page">
          <div className="l-page-top">
            <div className="header">
              <button
                type="button"
                className="btn back-btn"
                onClick={moveTo(-1)}
              >
                <span className="txt-hidden">뒤로 가기</span>
                <img
                  src="assets/images/icon/icon-arrow-back-white.svg"
                  alt="뒤로가기 아이콘"
                  className="icon icon-22"
                />
              </button>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="chart-container">
                <div className="chart-ttl-item">
                  <h1 className="chart-ttl">삼성전자</h1>
                  <span className="badge type-hold">보유중 +5.8%</span>
                </div>
                <div className="chart-opt-row">
                  <label for="ai-signal" className="checkbox-item type-02">
                    <input
                      id="ai-signal"
                      type="checkbox"
                      className="checkbox-inp"
                    ></input>
                    <label for="ai-signal" className="checkbox"></label>
                    <label for="ai-signal" className="checkbox-txt">
                      최근 1년간 AI 예측신호 보기
                    </label>
                  </label>
                </div>
                <div className="chart-area" style={{ height: "550px" }}>
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
                  </div>
                  <div className="box">
                    <span className="label">상승확률</span>
                    <b className="percent red-txt">75%</b>
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
