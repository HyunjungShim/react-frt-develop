import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TradingViewWidegt from "./TradingViewWidegt";
export default function MainMoreChart1() {
  const navigate = useNavigate();

  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };

  const [circleValue, setCircleValue] = useState(0);
  const [circleValue2, setCircleValue2] = useState(0);
  useEffect(() => {
    // 0.1초(100ms) 후에 value를 75로 설정
    setTimeout(() => {
      setCircleValue(86);
      setCircleValue2(99);
    }, 100);
  }, []);
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");
  return (
    <>
      <div id="app">
        <div className="main-more-01-chart-page chart-page l-page">
          <div className="l-page-top">
            <div className="header">
              <button
                type="button"
                className="btn back-btn"
                onClick={moveTo(-1)}
              >
                <span className="txt-hidden">뒤로 가기</span>
                <i className="ico ico-arrow-back-white"></i>
              </button>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="chart-container">
                <h1 className="chart-ttl">삼성전자</h1>
                <div className="chart-area" style={{ height: "500px" }}>
                  <TradingViewWidegt symbol={symbol} />
                </div>
              </div>
              <section className="section circle-section">
                <div className="circle-wrap">
                  <div className="js-circle js-circle-01">
                    <div className="bar">
                      <CircularProgressbar
                        value={circleValue}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: `#F55B22`,
                          pathTransitionDuration: 1,
                          trailColor: "#FFF3EE",
                        })}
                      ></CircularProgressbar>
                    </div>
                    <div className="box">
                      <b className="percent orange-txt">86%</b>
                    </div>
                  </div>
                  <span className="circle-txt">예측 적중률</span>
                </div>
                <div className="circle-wrap">
                  <div className="js-circle js-circle-02">
                    <div className="bar">
                      <CircularProgressbar
                        value={circleValue2}
                        strokeWidth={12}
                        styles={buildStyles({
                          pathColor: `#F5222D`,
                          pathTransitionDuration: 1,
                          trailColor: "#FAE9EA",
                        })}
                      ></CircularProgressbar>
                    </div>
                    <div className="box">
                      <b className="percent red-txt">99%</b>
                    </div>
                  </div>
                  <span className="circle-txt">가장 높은 수익률</span>
                </div>
                <div className="circle-wrap">
                  <div className="custom-circle">
                    <b className="txt">35회</b>
                  </div>
                  <span className="circle-txt">가장 높은 수익률</span>
                </div>
              </section>
              <section className="section period-section">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl">매매기간</h3>
                </div>
                <div className="section-content">
                  <p className="txt">2014.10.20~2020.02.16</p>
                </div>
              </section>
              <section className="section full-section">
                <div className="tbl type-01">
                  <div className="tbl-head">
                    <ul className="tr">
                      <li className="th ta-left">날짜</li>
                      <li className="th">구분</li>
                      <li className="th">가격</li>
                      <li className="th">수익률</li>
                    </ul>
                  </div>
                  <div className="tbl-body">
                    <ul className="tr">
                      <li className="td ta-left">
                        <span className="gray-txt">2024.02.05</span>
                      </li>
                      <li className="td">
                        <b className="red-txt">매수</b>
                      </li>
                      <li className="td ta-right">
                        <b className="dark-txt">238,500</b>
                      </li>
                      <li className="td ta-right">
                        <b className="red-txt">+5.3%</b>
                      </li>
                    </ul>
                    <ul className="tr">
                      <li className="td ta-left">
                        <span className="gray-txt">2024.02.05</span>
                      </li>
                      <li className="td">
                        <b className="blue-txt">매도</b>
                      </li>
                      <li className="td ta-right">
                        <b className="dark-txt">238,500</b>
                      </li>
                      <li className="td ta-right">
                        <b className="blue-txt">-5%</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
