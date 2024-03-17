import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Modal from "./Modal";
import { useModal } from "./ModalContext";
import Odometer from "react-odometerjs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MainTest() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  // 각 모달 context 전달
  const { isModalOpen, toggleModal } = useModal();
  // console.log(isModalOpen["modal01"]);

  useEffect(() => {
    const timeoutId1 = setTimeout(() => setOdometer1(10051), 100);
    const timeoutId2 = setTimeout(() => setOdometer2(6000000), 100);
    const timeoutId3 = setTimeout(() => setOdometer3(75), 100);
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, []);

  const [circleValue, setCircleValue] = useState(0);

  useEffect(() => {
    // 0.1초(100ms) 후에 value를 75로 설정
    setTimeout(() => {
      setCircleValue(75);
    }, 100);
  }, []);

  const [odometer1, setOdometer1] = useState(0);
  const [odometer2, setOdometer2] = useState(0);
  const [odometer3, setOdometer3] = useState(0);
  useEffect(() => {
    const timeoutId1 = setTimeout(() => setOdometer1(10051), 100);
    const timeoutId2 = setTimeout(() => setOdometer2(6000000), 100);
    const timeoutId3 = setTimeout(() => setOdometer3(75), 100);
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, []);

  return (
    <>
      <div id="app">
        <div className="main-page l-page">
          <div className="l-page-top"></div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="section bd-section main-section">
                <div className="section-row">
                  <div className="ttl-item">
                    <figure className="logo-circle">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "assets/images/logo/logo-symbol.png"
                        }
                        alt="로고 이미지"
                        className="logo-img"
                      />
                    </figure>
                    <h2 className="ttl">High Signal</h2>
                  </div>
                  <button
                    type="button"
                    className="btn arrow-btn arrow-blue-btn"
                  >
                    <span className="txt">High Signal 소통 교육 채널</span>
                    <i className="ico ico-arrow-blue"></i>
                  </button>
                </div>
                <p className="main-txt">
                  천문학적인 예측력으로 편안하게 투자하자
                </p>
                <button
                  type="button"
                  onClick={moveTo("/ai-search-main")}
                  className="btn main-direct-btn"
                >
                  <i className="ico ico-search"></i>
                  <span className="txt">
                    <span>주가 무료 예측하여 매수/매도시점 판단하세요</span>
                    <span className="indicator"></span>
                  </span>
                </button>
                <div className="main-chart-card">
                  <div className="box-ttl-wrap">
                    <div className="left-wrap">
                      <div className="box-ttl-item">
                        <h3 className="box-ttl">
                          <span className="txt">시장 종합 예측</span>
                        </h3>
                      </div>
                      <p className="box-ttl-desc">
                        증시의 불확실성에 대한 걱정을 내려놓고 투자에 집중하세요
                      </p>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="btn-grp">
                      <button type="button" className="btn blue-btn active">
                        코스피
                      </button>
                      <button type="button" className="btn blue-btn">
                        코스닥
                      </button>
                      <button type="button" className="btn blue-btn">
                        다우존스
                      </button>
                      <button type="button" className="btn blue-btn">
                        나스닥
                      </button>
                    </div>
                    <div className="card-chart-area">
                      <div className="chart-area">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/img-main-chart.svg"
                          }
                          alt="차트 이미지"
                          className="chart-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section bd-section">
                <div className="white-box ai-realtime-box">
                  <div className="box-ttl-wrap">
                    <div className="left-wrap">
                      <div className="box-ttl-item">
                        <h3 className="box-ttl">
                          <span className="txt">AI 실시간 주가 예측 현황</span>
                        </h3>
                        <button
                          type="button"
                          className="btn"
                          onClick={() => toggleModal("modal01")}
                        >
                          <span className="txt-hidden">설명 보기</span>
                          <i className="ico ico-question-mark"></i>
                        </button>
                      </div>
                      <p className="box-ttl-desc">24.01.28 기준</p>
                    </div>
                    <div className="right-wrap">
                      <button
                        type="button"
                        onClick={moveTo("/main-more-01")}
                        className="btn arrow-btn arrow-blue-btn"
                      >
                        <span className="txt">예측 결과 내역보기</span>
                        <i className="ico ico-arrow-blue"></i>
                      </button>
                    </div>
                  </div>

                  <div className="box-content">
                    <div className="inner-content">
                      <dl className="detail-list">
                        <dt className="ttl">누적 예측수</dt>
                        <dd className="detail">
                          <span className="blue-txt txt">
                            <span id="odometer01" className="odometer">
                              <Odometer
                                value={odometer1}
                                auto={true}
                                animation="count"
                                format="(,ddd).dd"
                              />
                            </span>
                            개
                          </span>
                        </dd>
                      </dl>
                      <dl className="detail-list">
                        <dt className="ttl">누적 예측수</dt>
                        <dd className="detail">
                          <span className="blue-txt txt">
                            <span id="odometer02" className="odometer">
                              <Odometer
                                value={odometer3}
                                auto={true}
                                animation="count"
                                format="(,ddd).dd"
                              />
                            </span>
                            %
                          </span>
                        </dd>
                      </dl>
                      <dl className="detail-list">
                        <dt className="ttl">최근 10거래일 투자 수익금</dt>
                        <dd className="detail">
                          <span className="blue-txt txt">
                            <span id="odometer03" className="odometer">
                              <Odometer
                                value={odometer2}
                                auto={true}
                                animation="count"
                                format="(,ddd).dd"
                              />
                            </span>
                            개
                          </span>
                          <span className="txt-desc">투자금 5천만원 기준</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section bd-section">
                <div className="white-box predict-company-box">
                  <div className="box-ttl-wrap">
                    <div className="left-wrap">
                      <div className="box-ttl-item">
                        <h3 className="box-ttl">
                          <span className="txt">상승 예측 종목 현황</span>
                        </h3>
                      </div>
                    </div>
                    <div className="right-wrap type-mt0">
                      <button
                        type="button"
                        className="btn arrow-btn bd-arrow-blue-btn"
                        onClick={moveTo("/ai-recommend-chart")}
                      >
                        <span className="txt">
                          AI 상승 예측 종목 신호받기
                          <span className="indicator"></span>
                        </span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          className="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="box-content">
                    <div className="company-list-grp">
                      <h3 className="inner-ttl">오늘</h3>
                      <div
                        className="company-list"
                        onClick={moveTo("/ai-recommend-chart")}
                      >
                        <span className="list-num">1</span>
                        <div className="company-item">
                          <figure className="logo-circle">
                            <img
                              src="assets/images/logo/logo-ex01.png"
                              alt="로고"
                              className="logo-img"
                            />
                          </figure>
                          <div className="item-content">
                            <h3 className="item-ttl">이마트</h3>
                            <p className="item-desc">
                              <span className="txt">예상수익률</span>

                              <span className="txt red-txt">+5.6%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="company-list"
                        onClick={moveTo("/ai-recommend-chart")}
                      >
                        <span className="list-num">2</span>
                        <div className="company-item">
                          <figure className="logo-circle">
                            <img
                              src="assets/images/logo/logo-ex02.png"
                              alt="로고"
                              className="logo-img"
                            />
                          </figure>
                          <div className="item-content">
                            <h3 className="item-ttl">신세계</h3>
                            <p className="item-desc">
                              <span className="txt">예상수익률</span>

                              <span className="txt red-txt">+5.6%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="company-list-grp">
                      <h3 className="inner-ttl">이번주</h3>
                      <div
                        className="company-list"
                        onClick={moveTo("/ai-recommend-chart")}
                      >
                        <span className="list-num">1</span>
                        <div className="company-item">
                          <figure className="logo-circle">
                            <img
                              src="assets/images/logo/logo-ex01.png"
                              alt="로고"
                              className="logo-img"
                            />
                          </figure>
                          <div className="item-content">
                            <h3 className="item-ttl">이마트</h3>
                            <p className="item-desc">
                              <span className="txt">예상수익률</span>

                              <span className="txt red-txt">+5.6%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="company-list"
                        onClick={moveTo("/ai-recommend-chart")}
                      >
                        <span className="list-num">2</span>
                        <div className="company-item">
                          <figure className="logo-circle">
                            <img
                              src="assets/images/logo/logo-ex02.png"
                              alt="로고"
                              className="logo-img"
                            />
                          </figure>
                          <div className="item-content">
                            <h3 className="item-ttl">신세계</h3>
                            <p className="item-desc">
                              <span className="txt">예상수익률</span>

                              <span className="txt red-txt">+5.6%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="white-box">
                  <div className="box-ttl-wrap">
                    <div className="box-ttl-item">
                      <h3 className="box-ttl">
                        <span className="txt">이번주 상승 예측 종목 현황</span>
                      </h3>
                    </div>
                  </div>

                  <div className="box-content">
                    <div className="company-list">
                      <span className="list-num">1</span>
                      <div className="company-item">
                        <figure className="logo-circle">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "assets/images/logo/logo-ex01.png"
                            }
                            alt="로고"
                            className="logo-img"
                          />
                        </figure>
                        <div className="item-content">
                          <h3 className="item-ttl">이마트</h3>
                          <p className="item-desc">
                            <span className="txt">예상수익률</span>

                            <span className="txt red-txt">+5.6%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="company-list">
                      <span className="list-num">2</span>
                      <div className="company-item">
                        <figure className="logo-circle">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "assets/images/logo/logo-ex02.png"
                            }
                            alt="로고"
                            className="logo-img"
                          />
                        </figure>
                        <div className="item-content">
                          <h3 className="item-ttl">신세계</h3>
                          <p className="item-desc">
                            <span className="txt">예상수익률</span>

                            <span className="txt red-txt">+5.6%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>
              <section className="section bd-section">
                <div className="white-box">
                  <div className="box-ttl-wrap">
                    <div class="left-wrap">
                      <h3 class="box-ttl">
                        <span class="txt">인기 종목 예측 현황</span>
                      </h3>
                      <p class="box-ttl-desc">현재 문의가 많은 종목</p>
                    </div>
                    <div className="right-wrap type-mt0">
                      <button
                        type="button"
                        className="btn arrow-btn bd-arrow-blue-btn"
                        onClick={moveTo("/ai-recommend-chart")}
                      >
                        <span className="txt">
                          인기종목 AI 매매 신호받기
                          <span className="indicator"></span>
                        </span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          className="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="box-content">
                    <ul className="list-item-grp">
                      <li className="list-item">
                        <span className="badge type-hold">보유중</span>
                        <h3 className="ttl">이수페타시스</h3>
                        <button
                          type="button"
                          className="btn"
                          onClick={moveTo("/ai-search-chart")}
                        >
                          <span className="percent-txt type-blue">
                            - 00.00%
                          </span>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "assets/images/icon/icon-arrow-right-sm.svg"
                            }
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
                            src={
                              process.env.PUBLIC_URL +
                              "assets/images/icon/icon-arrow-right-sm.svg"
                            }
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
                            src={
                              process.env.PUBLIC_URL +
                              "assets/images/icon/icon-arrow-right-sm.svg"
                            }
                            className="icon icon-16"
                            alt="바로가기 아이콘"
                          />
                        </button>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn gray-bd-btn btn-w100"
                      onClick={moveTo("/main-more-02")}
                    >
                      인기종목 더보기
                    </button>
                  </div>
                </div>
              </section>
              <section className="section bd-section">
                <div className="white-box">
                  <div className="box-ttl-wrap">
                    <div className="left-wrap">
                      <h3 className="box-ttl">
                        <span className="txt">
                          실시간 TOP 10 뉴스 종목 예측현황
                        </span>
                      </h3>
                      <p className="box-ttl-desc">현재 이슈 종목</p>
                    </div>
                  </div>

                  <div className="box-content">
                    <ul className="list-item-grp">
                      <li className="list-item-row">
                        <div className="list-item">
                          <span className="badge type-hold">보유중</span>
                          <h3 className="ttl">이수페타시스</h3>
                          <button
                            type="button"
                            className="btn"
                            onClick={moveTo("/ai-search-chart")}
                          >
                            <span className="percent-txt type-blue">
                              - 00.00%
                            </span>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "assets/images/icon/icon-arrow-right-sm.svg"
                              }
                              className="icon icon-16"
                              alt="바로가기 아이콘"
                            />
                          </button>
                        </div>
                        <p className="news-txt">
                          삼성전자가 7년 동안 이어진 사법 리스크에 발이 묶인
                          동안, 글로벌 주요 반도체 경쟁사들은 발 빠르게 움직이며
                          세계 시장에서 영향력을 확대하고 있다. 대만 TSMC는
                          반도체 파운드리(위탁 생산) 분야 선두를 확고히 다졌고,
                          미국 인텔과 일본 라피더스 등 후발 주자는 국가적 지원을
                          받아 삼성전자를 거세게 추격하고 있다. 2030년까지
                          메모리 반도체와 파운드리를 포함한 시스템 반도체
                          모두에서 글로벌 1위를 목표로 하고 있는 삼성전자가
                          직면한 경쟁이 한층 치열해졌다는 평가가 나온다.
                        </p>
                      </li>
                      <li className="list-item-row">
                        <div className="list-item">
                          <span className="badge">관망중</span>
                          <h3 className="ttl">센서뷰</h3>
                          <button
                            type="button"
                            className="btn"
                            onClick={moveTo("/ai-search-chart")}
                          >
                            <span className="percent-txt type-red">
                              + 00.00%
                            </span>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "assets/images/icon/icon-arrow-right-sm.svg"
                              }
                              className="icon icon-16"
                              alt="바로가기 아이콘"
                            />
                          </button>
                        </div>
                        <p className="news-txt">
                          삼성전자가 7년 동안 이어진 사법 리스크에 발이 묶인
                          동안, 글로벌 주요 반도체 경쟁사들은 발 빠르게 움직이며
                          세계 시장에서 영향력을 확대하고 있다. 대만 TSMC는
                          반도체 파운드리(위탁 생산) 분야 선두를 확고히 다졌고,
                          미국 인텔과 일본 라피더스 등 후발 주자는 국가적 지원을
                          받아 삼성전자를 거세게 추격하고 있다. 2030년까지
                          메모리 반도체와 파운드리를 포함한 시스템 반도체
                          모두에서 글로벌 1위를 목표로 하고 있는 삼성전자가
                          직면한 경쟁이 한층 치열해졌다는 평가가 나온다.
                        </p>
                      </li>
                      <li className="list-item-row">
                        <div className="list-item">
                          <span className="badge type-hold">보유중</span>
                          <h3 className="ttl">어보브반도체</h3>
                          <button
                            type="button"
                            className="btn"
                            onClick={moveTo("/ai-search-chart")}
                          >
                            <span className="percent-txt type-red">
                              + 00.00%
                            </span>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "assets/images/icon/icon-arrow-right-sm.svg"
                              }
                              className="icon icon-16"
                              alt="바로가기 아이콘"
                            />
                          </button>
                        </div>
                        <p className="news-txt">
                          삼성전자가 7년 동안 이어진 사법 리스크에 발이 묶인
                          동안, 글로벌 주요 반도체 경쟁사들은 발 빠르게 움직이며
                          세계 시장에서 영향력을 확대하고 있다. 대만 TSMC는
                          반도체 파운드리(위탁 생산) 분야 선두를 확고히 다졌고,
                          미국 인텔과 일본 라피더스 등 후발 주자는 국가적 지원을
                          받아 삼성전자를 거세게 추격하고 있다. 2030년까지
                          메모리 반도체와 파운드리를 포함한 시스템 반도체
                          모두에서 글로벌 1위를 목표로 하고 있는 삼성전자가
                          직면한 경쟁이 한층 치열해졌다는 평가가 나온다.
                        </p>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn gray-bd-btn btn-w100"
                      onClick={moveTo("/main-more-03")}
                    >
                      뉴스종목 더보기
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <Footer />
        </div>
        <Modal />
      </div>
    </>
  );
}
