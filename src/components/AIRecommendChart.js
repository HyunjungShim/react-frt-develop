import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TradingViewWidegt from "./TradingViewWidegt";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function AIRecommendChart() {
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

  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <div id="app">
        <div className="ai-recommend-chart-page chart-page l-page">
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
              <div id="charts-swiper" className="swiper">
                <Swiper
                  className="swiper-wrapper"
                  loop
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="chart-container">
                      <div className="chart-ttl-item">
                        <h1 className="chart-ttl">삼성전자</h1>
                        <span className="badge type-hold">보유중 +5.8%</span>
                      </div>
                      <div className="chart-opt-row">
                        <label
                          for="ai01-signal"
                          className="checkbox-item type-02"
                        >
                          <input
                            id="ai01-signal"
                            type="checkbox"
                            className="checkbox-inp"
                          ></input>
                          <label for="ai01-signal" className="checkbox"></label>
                          <label for="ai01-signal" className="checkbox-txt">
                            최근 1년간 AI 예측신호 보기
                          </label>
                        </label>
                      </div>
                      <div className="chart-area" style={{ height: "550px" }}>
                        <TradingViewWidegt symbol={symbol} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="chart-container">
                      <div className="chart-ttl-item">
                        <h1 className="chart-ttl">SK하이닉스</h1>
                        <span className="badge type-hold">보유중 +2.8%</span>
                      </div>
                      <div className="chart-opt-row">
                        <label
                          for="ai02-signal"
                          className="checkbox-item type-02"
                        >
                          <input
                            id="ai02-signal"
                            type="checkbox"
                            className="checkbox-inp"
                          ></input>
                          <label for="ai02-signal" className="checkbox"></label>
                          <label for="ai02-signal" className="checkbox-txt">
                            최근 1년간 AI 예측신호 보기
                          </label>
                        </label>
                      </div>
                      <div className="chart-area" style={{ height: "550px" }}>
                        <TradingViewWidegt symbol={symbol} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="chart-container">
                      <div className="chart-ttl-item">
                        <h1 className="chart-ttl">테슬라</h1>
                        <span className="badge type-hold">보유중 +12%</span>
                      </div>
                      <div className="chart-opt-row">
                        <label
                          for="ai03-signal"
                          className="checkbox-item type-02"
                        >
                          <input
                            id="ai03-signal"
                            type="checkbox"
                            className="checkbox-inp"
                          ></input>
                          <label for="ai03-signal" className="checkbox"></label>
                          <label for="ai03-signal" className="checkbox-txt">
                            최근 1년간 AI 예측신호 보기
                          </label>
                        </label>
                      </div>
                      <div className="chart-area" style={{ height: "550px" }}>
                        <TradingViewWidegt symbol={symbol} />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
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
              <div className="box-btn-wrap type-space-around">
                <button
                  type="button"
                  id="charts-next-btn"
                  className="btn circle-btn"
                  onClick={goToNextSlide}
                >
                  <span className="circle">
                    <img
                      src="assets/images/icon/icon-x.svg"
                      alt="닫기 아이콘"
                      className="icon icon-20"
                    />
                  </span>
                  <span className="txt">다른종목 보기</span>
                </button>
                <button
                  type="button"
                  className="btn circle-btn"
                  onClick={moveTo("/detail-main")}
                >
                  <span className="circle type-blue">
                    <img
                      src="assets/images/icon/icon-search-white.svg"
                      alt="닫기 아이콘"
                      className="icon icon-20"
                    />
                  </span>
                  <span className="txt">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
