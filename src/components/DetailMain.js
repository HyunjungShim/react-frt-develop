import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TradingViewWidegt from "./TradingViewWidegt";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DetailMain() {
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

  const [tab1, setTab1] = useState(0);
  const [tab2, setTab2] = useState(0);
  const [tab3, setTab3] = useState(0);
  const [tab4, setTab4] = useState(0);
  useEffect(() => {
    // 0.1초(100ms) 후에 value를 75로 설정
    setTimeout(() => {
      setCircleValue(75);
    }, 100);
  }, []);

  return (
    <>
      <div id="app">
        <div className="detail-main-page l-page">
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
              <h1 className="hd-title">투자 하이라이트</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="section main-section">
                <div className="main-ttl-wrap">
                  <div className="ttl-row">
                    <b className="ttl type-md">현대차</b>
                    <span className="ttl-desc">005380</span>
                  </div>
                  <div className="ttl-row">
                    <b className="ttl type-lg">252,500원</b>
                    <span className="ttl-desc">02.16</span>
                  </div>
                  <div className="ttl-row">
                    <b className="sub-txt red-txt">▲&nbsp;12,500</b>

                    <b className="badge type-red">5.21%</b>
                  </div>
                </div>
                <div className="section-content">
                  <div className="btn-grp">
                    <button
                      type="button"
                      onClick={moveTo("/main-more-chart01")}
                      className="btn gray-bd-btn"
                    >
                      과거 예측 내역 보기
                    </button>
                    <button type="button" className="btn gray-bd-btn">
                      기업개요 읽기
                    </button>
                  </div>
                  <div className="main-info-card">
                    <div className="card-content">
                      <div className="circle type-hold">
                        <span className="txt">보유중</span>
                      </div>

                      {/* <div className="circle">
                <span className="txt">관망중</span>
              </div>  */}
                      <div className="mg-left">
                        <div className="detail-list-grp">
                          <dl className="detail-list">
                            <dt className="ttl">수익률</dt>
                            <dt className="detail-sm">
                              <b className="red-txt lg-txt">+5.87%</b>
                            </dt>
                          </dl>
                        </div>
                        <div className="detail-list-grp">
                          <dl className="detail-list">
                            <dt className="ttl">보유</dt>
                            <dt className="detail-sm">
                              <b className="dark-txt">7</b>일째
                            </dt>
                          </dl>
                          <dl className="detail-list">
                            <dt className="ttl">매수가</dt>
                            <dt className="detail-sm">
                              <b className="dark-txt">238,500</b>원
                            </dt>
                          </dl>
                          <dl className="detail-list">
                            <dt className="ttl">발생</dt>
                            <dt className="detail-sm">
                              <b className="dark-txt">2024.02.05 15:00</b>
                            </dt>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn theme-solid-btn btn-w100"
                    >
                      AI 매매 신호 받기
                    </button>
                  </div>
                </div>
              </section>
              <section className="bd-section point-section">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl">핵심 투자포인트</h3>
                  <p className="section-ttl-desc">
                    AI매매는 핵심투자포인트를 기반합니다.
                  </p>
                </div>

                <div className="section-content">
                  <div className="box-grp">
                    <a href="#section01" className="point-box">
                      <span className="num">1</span>
                      <p className="txt">AI 차트 예측 솔루션 예측률 95%</p>
                    </a>
                    <a href="#section02" className="point-box">
                      <span className="num">2</span>
                      <p className="txt">정부 저 PBR 제고 정책</p>
                    </a>
                    <a href="#section03" className="point-box">
                      <span className="num">3</span>
                      <p className="txt">24년 1분기 실적 어닝 서프라이즈</p>
                    </a>
                    <a href="#section04" className="point-box">
                      <span className="num">4</span>
                      <p className="txt">외국인 매수세 대폭 확대</p>
                    </a>
                  </div>
                </div>
              </section>
              <section id="section01" className="bd-section">
                <div className="section-ttl-wrap type-center ">
                  <div className="section-ttl-item">
                    <h3 className="section-ttl type-lg">AI 기술종합 분석</h3>
                    <span className="badge type-blue">국내 유일 기술력</span>
                  </div>
                  <p className="section-ttl-desc type-red type-lg">
                    종목에 영향을 주는 모든 변수를 고려합니다.
                  </p>
                </div>

                <div className="section-content">
                  <div id="tabs01-02" className="tabs type-02">
                    <button
                      type="button"
                      data-tab="tab01-0201"
                      className={"tab " + (tab1 == 0 ? "active" : "")}
                      onClick={() => {
                        setTab1(0);
                      }}
                    >
                      유사도 분석
                    </button>
                    <button
                      type="button"
                      data-tab="tab01-0202"
                      className={"tab " + (tab1 == 1 ? "active" : "")}
                      onClick={() => {
                        setTab1(1);
                      }}
                    >
                      엘리어트 파동 분석
                    </button>
                  </div>
                  <div
                    id="tabs01-02-contents"
                    className="tab-content-container"
                  >
                    <div
                      id="tab01-0201"
                      className={"tab-content " + (tab1 == 0 ? "active" : "")}
                    >
                      <div className="result-container">
                        <div className="chart-area" style={{ height: "300px" }}>
                          <TradingViewWidegt symbol={symbol} />
                        </div>
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
                            <ul className="gage-list-grp">
                              <li className="gage-list">
                                <h3 className="ttl">종목</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                </div>
                              </li>
                              <li className="gage-list">
                                <h3 className="ttl">환율</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                  <div className="gage-box "></div>
                                </div>
                              </li>
                              <li className="gage-list">
                                <h3 className="ttl">증시</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                </div>
                              </li>
                              <li className="gage-list">
                                <h3 className="ttl">업종</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="btn-wrap">
                          <button
                            type="button"
                            className="btn btn-w100 gray-bd-btn"
                            onClick={moveTo("/detail-similarity-main")}
                          >
                            <span className="txt">유사패턴 확인</span>
                            <i className="ico ico-arrow-right-sm-gray"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      id="tab01-0202"
                      className={"tab-content " + (tab1 == 1 ? "active" : "")}
                    >
                      <div className="result-container">
                        <div className="chart-area" style={{ height: "300px" }}>
                          <TradingViewWidegt symbol={symbol} />
                        </div>
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
                            <ul className="gage-list-grp">
                              <li className="gage-list">
                                <h3 className="ttl">종목</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                </div>
                              </li>
                              <li className="gage-list">
                                <h3 className="ttl">환율</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                  <div className="gage-box "></div>
                                </div>
                              </li>
                              <li className="gage-list">
                                <h3 className="ttl">증시</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                </div>
                              </li>
                              <li className="gage-list">
                                <h3 className="ttl">업종</h3>
                                <div className="gage-boxes">
                                  <div className="gage-box"></div>
                                  <div className="gage-box active"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                  <div className="gage-box"></div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="btn-wrap">
                          <button
                            type="button"
                            className="btn btn-w100 gray-bd-btn"
                            onClick={moveTo("/detail-elliott-main")}
                          >
                            <span className="txt">파동 카운팅 확인</span>
                            <i className="ico ico-arrow-right-sm-gray"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="section02" className="bd-section">
                <div className="section-ttl-wrap type-center type-mbnarrow">
                  <h3 className="section-ttl type-lg">종목이슈</h3>
                </div>

                <div className="section-content">
                  <div className="badge-btn-grp">
                    <button type="button" className="btn badge-btn active">
                      #HBM
                    </button>
                    <button type="button" className="btn badge-btn">
                      #반도체
                    </button>
                    <button type="button" className="btn badge-btn">
                      #LPCAMM
                    </button>
                    <button type="button" className="btn badge-btn">
                      #이미지센서
                    </button>
                  </div>
                  <div className="detail-card">
                    <div className="card-ttl-wrap">
                      <h3 className="card-ttl">HBM</h3>
                      <span className="card-date-txt">2024/02/29</span>
                    </div>
                    <p className="news-txt">
                      삼성전자가 7년 동안 이어진 사법 리스크에 발이 묶인 동안,
                      글로벌 주요 반도체 경쟁사들은 발 빠르게 움직이며 세계
                      시장에서 영향력을 확대하고 있다. 대만 TSMC는 반도체
                      파운드리(위탁 생산) 분야 선두를 확고히 다졌고, 미국 인텔과
                      일본 라피더스 등 후발 주자는 국가적 지원을 받아 삼성전자를
                      거세게 추격하고 있다. 2030년까지 메모리 반도체와
                      파운드리를 포함한 시스템 반도체 모두에서 글로벌 1위를
                      목표로 하고 있는 삼성전자가 직면한 경쟁이 한층
                      치열해졌다는 평가가 나온다.
                    </p>
                  </div>
                </div>
              </section>
              <section id="section03" className="bd-section">
                <div className="section-ttl-wrap type-center type-bd">
                  <h3 className="section-ttl type-lg">실적분석</h3>
                </div>

                <div className="section-content">
                  <div className="inner-content-row">
                    <div className="section-ttl-wrap type-center type-mbnarrow">
                      <h3 className="section-ttl">재무성적</h3>
                      <p className="section-ttl-desc type-red">
                        영업이익과 주가의 상관성이 높은 기업입니다.
                      </p>
                    </div>
                    <div className="inner-content">
                      <div id="tabs01" className="tabs type-01">
                        <button
                          type="button"
                          data-tab="tab01"
                          onClick={() => {
                            setTab4(0);
                          }}
                          className={"btn tab " + (tab4 == 0 ? "active" : "")}
                        >
                          분기
                        </button>
                        <button
                          type="button"
                          data-tab="tab02"
                          onClick={() => {
                            setTab4(1);
                          }}
                          className={"btn tab " + (tab4 == 1 ? "active" : "")}
                        >
                          연간
                        </button>
                      </div>
                      <div
                        id="tabs01-contents"
                        className="tab-content-container"
                      >
                        <div
                          id="tab01"
                          className={
                            "tab-content " + (tab4 == 0 ? "active" : "")
                          }
                        >
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-01.png"
                              alt=""
                            />
                          </div>
                          <div className="chart-swiper-container">
                            <div className="swiper swiper-01">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <div className="detail-card">
                                    <h3 className="card-ttl">2023년</h3>
                                    <div className="detail-list-grp">
                                      <dl className="detail-list">
                                        <dt className="ttl">매출액</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">
                                            75조 4,800억
                                          </b>

                                          <span className="blue-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">9.1조</b>

                                          <span className="red-txt">
                                            (YoY - 26.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">당기순이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">7.2조</b>

                                          <span className="red-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익률</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">+ 12.11%</b>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="swiper-slide">
                                  <div className="detail-card">
                                    <h3 className="card-ttl">2023년</h3>
                                    <div className="detail-list-grp">
                                      <dl className="detail-list">
                                        <dt className="ttl">매출액</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">
                                            75조 4,800억
                                          </b>

                                          <span className="blue-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">9.1조</b>

                                          <span className="red-txt">
                                            (YoY - 26.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">당기순이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">7.2조</b>

                                          <span className="red-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익률</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">+ 12.11%</b>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="detail-card">
                                    <h3 className="card-ttl">2023년</h3>
                                    <div className="detail-list-grp">
                                      <dl className="detail-list">
                                        <dt className="ttl">매출액</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">
                                            75조 4,800억
                                          </b>

                                          <span className="blue-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">9.1조</b>

                                          <span className="red-txt">
                                            (YoY - 26.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">당기순이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">7.2조</b>

                                          <span className="red-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익률</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">+ 12.11%</b>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="tab02"
                          className={
                            "tab-content " + (tab4 == 1 ? "active" : "")
                          }
                        >
                          <div className="inner-chart-area">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/sample/img-sample-result-chart-01.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="chart-swiper-container">
                            <div className="swiper swiper-02">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <div className="detail-card">
                                    <h3 className="card-ttl">2023년</h3>
                                    <div className="detail-list-grp">
                                      <dl className="detail-list">
                                        <dt className="ttl">매출액</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">
                                            75조 4,800억
                                          </b>

                                          <span className="blue-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">9.1조</b>

                                          <span className="red-txt">
                                            (YoY - 26.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">당기순이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">7.2조</b>

                                          <span className="red-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익률</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">+ 12.11%</b>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="swiper-slide">
                                  <div className="detail-card">
                                    <h3 className="card-ttl">2023년</h3>
                                    <div className="detail-list-grp">
                                      <dl className="detail-list">
                                        <dt className="ttl">매출액</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">
                                            75조 4,800억
                                          </b>

                                          <span className="blue-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">9.1조</b>

                                          <span className="red-txt">
                                            (YoY - 26.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">당기순이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">7.2조</b>

                                          <span className="red-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익률</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">+ 12.11%</b>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="detail-card">
                                    <h3 className="card-ttl">2023년</h3>
                                    <div className="detail-list-grp">
                                      <dl className="detail-list">
                                        <dt className="ttl">매출액</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">
                                            75조 4,800억
                                          </b>

                                          <span className="blue-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">9.1조</b>

                                          <span className="red-txt">
                                            (YoY - 26.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">당기순이익</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">7.2조</b>

                                          <span className="red-txt">
                                            (YoY - 12.80%)
                                          </span>
                                        </dd>
                                      </dl>
                                      <dl className="detail-list">
                                        <dt className="ttl">영업이익률</dt>
                                        <dd className="detail">
                                          <b className="dark-txt">+ 12.11%</b>
                                        </dd>
                                      </dl>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-content-row">
                    <div className="section-ttl-wrap type-center type-mbnarrow">
                      <h3 className="section-ttl">기업 주요 지표</h3>
                    </div>
                    <div className="inner-content">
                      <div id="tabs02" className="tabs type-01">
                        <button
                          type="button"
                          data-tab="tab02-01"
                          onClick={() => {
                            setTab2(0);
                          }}
                          className={"btn tab " + (tab2 == 0 ? "active" : "")}
                        >
                          PER
                        </button>
                        <button
                          type="button"
                          data-tab="tab02-02"
                          onClick={() => {
                            setTab2(1);
                          }}
                          className={"btn tab " + (tab2 == 1 ? "active" : "")}
                        >
                          PBR
                        </button>
                        <button
                          type="button"
                          data-tab="tab02-03"
                          onClick={() => {
                            setTab2(2);
                          }}
                          className={"btn tab " + (tab2 == 2 ? "active" : "")}
                        >
                          EPS
                        </button>
                        <button
                          type="button"
                          data-tab="tab02-04"
                          onClick={() => {
                            setTab2(3);
                          }}
                          className={"btn tab " + (tab2 == 3 ? "active" : "")}
                        >
                          ROE
                        </button>
                        <button
                          type="button"
                          data-tab="tab02-05"
                          onClick={() => {
                            setTab2(4);
                          }}
                          className={"btn tab " + (tab2 == 4 ? "active" : "")}
                        >
                          EV/EBITDA
                        </button>
                        <button
                          type="button"
                          data-tab="tab02-06"
                          onClick={() => {
                            setTab2(5);
                          }}
                          className={"btn tab " + (tab2 == 5 ? "active" : "")}
                        >
                          PEGR
                        </button>
                      </div>
                      <div
                        id="tabs02-contents"
                        className="tab-content-container"
                      >
                        <div
                          id="tab02-01"
                          className={
                            "tab-content " + (tab2 == 0 ? "active" : "")
                          }
                        >
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-02.png"
                              alt=""
                            />
                          </div>
                          <div className="chart-swiper-container">
                            <div className="swiper">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <div className="detail-card">
                                    <h3 className="card-ttl">주요 지표 비교</h3>
                                    <div className="tbl type-02">
                                      <div className="tbl-head">
                                        <ul className="tr">
                                          <li className="th"></li>
                                          <li className="th">현대차</li>
                                          <li className="th">업종평균</li>
                                          <li className="th">업종 내 순위</li>
                                        </ul>
                                      </div>
                                      <div className="tbl-body">
                                        <ul className="tr">
                                          <li className="td ta-left">
                                            <b className="dark-txt">PER</b>
                                          </li>
                                          <li className="td">
                                            <b className="dark-txt">5.77</b>
                                          </li>
                                          <li className="td">
                                            <b className="dark-txt">10.77</b>
                                          </li>
                                          <li className="td">
                                            <b className="dark-txt">30위</b>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="tab02-02"
                          className={
                            "tab-content " + (tab2 == 1 ? "active" : "")
                          }
                        >
                          <img
                            src="assets/images/sample/img-sample-result-chart-02.png"
                            alt=""
                          />
                        </div>

                        <div
                          id="tab02-03"
                          className={
                            "tab-content " + (tab2 == 2 ? "active" : "")
                          }
                        >
                          <img
                            src="assets/images/sample/img-sample-result-chart-02.png"
                            alt=""
                          />
                        </div>

                        <div
                          id="tab02-04"
                          className={
                            "tab-content " + (tab2 == 3 ? "active" : "")
                          }
                        >
                          <img
                            src="assets/images/sample/img-sample-result-chart-02.png"
                            alt=""
                          />
                        </div>

                        <div
                          id="tab02-05"
                          className={
                            "tab-content " + (tab2 == 4 ? "active" : "")
                          }
                        >
                          <img
                            src="assets/images/sample/img-sample-result-chart-02.png"
                            alt=""
                          />
                        </div>

                        <div
                          id="tab02-06"
                          className={
                            "tab-content " + (tab2 == 5 ? "active" : "")
                          }
                        >
                          <img
                            src="assets/images/sample/img-sample-result-chart-02.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="section04" className="bd-section">
                <div className="section-ttl-wrap type-center type-mbnarrow">
                  <h3 className="section-ttl type-lg">수급현황</h3>
                </div>

                <div className="section-content">
                  <div id="tabs03" className="tabs type-02">
                    <button
                      type="button"
                      data-tab="tab03-01"
                      onClick={() => {
                        setTab3(0);
                      }}
                      className={"tab " + (tab3 == 0 ? "active" : "")}
                    >
                      누적 매매
                    </button>
                    <button
                      type="button"
                      data-tab="tab03-02"
                      onClick={() => {
                        setTab3(1);
                      }}
                      className={"tab " + (tab3 == 1 ? "active" : "")}
                    >
                      매매 동향
                    </button>
                  </div>
                  <div id="tabs03-contents" className="tab-content-container">
                    <div
                      id="tab03-01"
                      className={"tab-content " + (tab3 == 0 ? "active" : "")}
                    >
                      <div id="tabs0301" className="tabs type-01 type-center">
                        <button
                          data-tab="tab0301-01"
                          type="button"
                          className="tab type-red active"
                        >
                          외국인
                        </button>
                        <button
                          data-tab="tab0301-02"
                          type="button"
                          className="tab"
                        >
                          기관
                        </button>
                        <button
                          data-tab="tab0301-03"
                          type="button"
                          className="tab"
                        >
                          개인
                        </button>
                      </div>
                      <div
                        id="tabs0301-contents"
                        className="tab-content-container"
                      >
                        <div id="tab0301-01" className="tab-content active">
                          <div className="info-txt">
                            <span className="txt">외인보유률</span>
                            <b className="red-txt">36.88%</b>
                          </div>
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div id="tab0301-02" className="tab-content">
                          <div className="info-txt">
                            <span className="txt">기관보유률</span>
                            <b className="red-txt">36.88%</b>
                          </div>
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div id="tab0301-03" className="tab-content">
                          <div className="info-txt">
                            <span className="txt">개인보유률</span>
                            <b className="red-txt">36.88%</b>
                          </div>
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="tab03-02"
                      className={"tab-content " + (tab3 == 1 ? "active" : "")}
                    >
                      <div
                        id="tabs0302"
                        className="tabs type-01 type-center type-red"
                      >
                        <button
                          data-tab="tab0302-01"
                          type="button"
                          className="tab active"
                        >
                          외국인
                        </button>
                        <button
                          data-tab="tab0302-02"
                          type="button"
                          className="tab"
                        >
                          기관
                        </button>
                        <button
                          data-tab="tab0302-03"
                          type="button"
                          className="tab"
                        >
                          개인
                        </button>
                      </div>
                      <div
                        id="tabs0302-contents"
                        className="tab-content-container"
                      >
                        <div id="tab0302-01" className="tab-content active">
                          <div className="info-txt">
                            <span className="txt">외인보유률</span>
                            <b className="red-txt">36.88%</b>
                          </div>
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div id="tab0302-02" className="tab-content">
                          <div className="info-txt">
                            <span className="txt">기관보유률</span>
                            <b className="red-txt">36.88%</b>
                          </div>
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div id="tab0302-03" className="tab-content">
                          <div className="info-txt">
                            <span className="txt">개인보유률</span>
                            <b className="red-txt">36.88%</b>
                          </div>
                          <div className="inner-chart-area">
                            <img
                              src="assets/images/sample/img-sample-result-chart-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="l-page-bottom"></div>
        </div>
      </div>
    </>
  );
}
