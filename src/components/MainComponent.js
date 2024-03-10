import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Modal from "./Modal";
import { useModal } from "./ModalContext";
import Odometer from "react-odometerjs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MainComponent() {
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
        <div className="main-page l-page">
          <div className="l-page-top"></div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="welcome-section">
                <figure className="logo-circle">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/logo/logo-symbol.png"
                    }
                    alt="로고 이미지"
                    className="logo-img"
                  />
                </figure>
                <h2 className="ttl">
                  안녕하세요, <br />
                  Comfort & Ease입니다.
                </h2>
              </section>

              {/* <section className="banner-section">
                <div id="swiper-banner" className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/banner/img-banner-01.png"
                        }
                        alt="배너 이미지"
                        className="banner-img"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/banner/img-banner-02.png"
                        }
                        alt="배너 이미지"
                        className="banner-img"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/banner/img-banner-03.png"
                        }
                        alt="배너 이미지"
                        className="banner-img"
                      />
                    </div>
                  </div>
                  <div className="banner-swiper-pagination"></div>
                </div>
              </section> */}

              <section className="direct-section">
                <div className="white-box">
                  <div className="box-ttl-wrap">
                    <h3 className="box-ttl">
                      <span className="txt">종목/증시 무료 예측하기</span>
                      <span className="indicator"></span>
                    </h3>
                    <div className="right-wrap">
                      <button
                        type="button"
                        className="btn arrow-btn"
                        // onClick="location.href='ai-search-main.html';"
                      >
                        <span className="txt">바로가기</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          className="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                  </div>
                </div>
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
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/icon-question-mark.svg"
                            }
                            alt="물음표 아이콘"
                            className="icon icon-20"
                          />
                        </button>
                      </div>
                      <p className="box-ttl-desc">24.01.28 기준</p>
                    </div>
                  </div>

                  <div className="box-content">
                    <div className="inner-content-grp">
                      <div className="inner-content">
                        <div className="left-figure">
                          <div className="bar-grp">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                          </div>
                        </div>
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
                      </div>
                      <div className="inner-content">
                        <div className="left-figure">
                          <div className="js-circle">
                            <div className="bar">
                              <CircularProgressbar
                                value={circleValue}
                                strokeWidth={12}
                                styles={buildStyles({
                                  pathColor: `#2F54EB`,
                                  pathTransitionDuration: 1,
                                })}
                              ></CircularProgressbar>
                            </div>
                          </div>
                        </div>
                        <dl className="detail-list">
                          <dt className="ttl">예측률</dt>
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
                      </div>
                    </div>
                    <dl className="detail-list">
                      <dt className="ttl">최근 10거래일 투자 수익금</dt>
                      <dd className="detail">
                        <b className="blue-txt txt">
                          <span id="odometer03" className="odometer">
                            <Odometer
                              value={odometer2}
                              auto={true}
                              animation="count"
                              format="(,ddd).dd"
                            />
                          </span>
                          만원
                        </b>
                        <span className="txt-desc">투자금 5천만원 기준</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="white-box">
                  <div className="box-ttl-wrap">
                    <div className="left-wrap">
                      <h3 className="box-ttl">
                        <span className="txt">인기 종목 예측 현황</span>
                      </h3>
                      <p className="box-ttl-desc">현재 문의가 많은 종목</p>
                    </div>
                    <div className="right-wrap">
                      <button
                        type="button"
                        className="btn arrow-btn"
                        // onClick="location.href='ai-recommend-chart.html';"
                      >
                        <span className="txt">AI 인기종목 추천받기</span>
                        <span className="indicator"></span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-arrow-right-sm.svg"
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
                          //   onClick="location.href='detail-main.html';"
                        >
                          <span className="percent-txt type-blue">
                            - 00.00%
                          </span>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/icon-arrow-right-sm.svg"
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
                          //   onClick="location.href='detail-main.html';"
                        >
                          <span className="percent-txt type-red">+ 00.00%</span>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/icon-arrow-right-sm.svg"
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
                          //   onClick="location.href='detail-main.html';"
                        >
                          <span className="percent-txt type-red">+ 00.00%</span>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/icon-arrow-right-sm.svg"
                            }
                            className="icon icon-16"
                            alt="바로가기 아이콘"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="white-box ai-solution-box">
                  <div className="box-ttl-wrap">
                    <div className="box-ttl-item">
                      <h3 className="box-ttl">
                        <span className="txt">AI 예측 솔루션</span>
                      </h3>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => toggleModal("modal02")}
                      >
                        <span className="txt-hidden">설명 보기</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-question-mark.svg"
                          }
                          alt="물음표 아이콘"
                          className="icon icon-20"
                        />
                      </button>
                    </div>
                    <div className="right-wrap type-narrow">
                      <span className="badge type-blue">최고 예측률</span>
                    </div>
                  </div>

                  <div className="box-content">
                    <div className="inner-content-grp">
                      <div className="inner-content">
                        <div
                          className="solution-box type-blue"
                          //   onClick="location.href='ai-search-main.html';"
                        >
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/icon-pie.svg"
                            }
                            alt="종목/증시 예측 아이콘"
                            className="icon icon-36"
                          />
                          <h3 className="ttl">종목/증시 예측</h3>
                          <button type="button" className="btn">
                            <span className="txt-hidden">
                              종목/증시 예측 바로 가기
                            </span>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/icon/icon-arrow-right.svg"
                              }
                              alt="바로가기 아이콘"
                              className="icon icon-16"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="inner-content">
                        <div
                          className="solution-box type-mint"
                          //   onClick="location.href='ai-recommend-chart.html';"
                        >
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/icon-ai.svg"
                            }
                            alt="종목/증시 예측 아이콘"
                            className="icon icon-36"
                          />
                          <h3 className="ttl">AI 종목 추천</h3>
                          <button type="button" className="btn">
                            <span className="txt-hidden">
                              AI 종목 추천 바로 가기
                            </span>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/icon/icon-arrow-right.svg"
                              }
                              alt="바로가기 아이콘"
                              className="icon icon-16"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="white-box">
                  <div className="box-ttl-wrap">
                    <div className="box-ttl-item">
                      <h3 className="box-ttl">
                        <span className="txt">엘리어트 파동 플랫폼</span>
                      </h3>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => toggleModal("modal03")}
                      >
                        <span className="txt-hidden">설명 보기</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-question-mark.svg"
                          }
                          alt="물음표 아이콘"
                          className="icon icon-20"
                        />
                      </button>
                    </div>
                    <div className="right-wrap type-narrow">
                      <button
                        type="button"
                        className="btn arrow-btn"
                        onClick={moveTo("/elliot")}
                      >
                        <span className="badge type-blue">국내 유일</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          className="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="white-box">
                  <div className="box-ttl-wrap">
                    <div className="box-ttl-item">
                      <h3 className="box-ttl">
                        <span className="txt">유사도 분석</span>
                      </h3>

                      <button
                        type="button"
                        className="btn"
                        onClick={() => toggleModal("modal04")}
                      >
                        <span className="txt-hidden">설명 보기</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-question-mark.svg"
                          }
                          alt="물음표 아이콘"
                          className="icon icon-20"
                        />
                      </button>
                    </div>
                    <div className="right-wrap type-narrow">
                      <button
                        type="button"
                        className="btn arrow-btn"
                        onClick={moveTo("/similarity")}
                      >
                        <span className="badge type-blue">업계 최초 무료</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          className="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <Footer />
        </div>
        <Modal />
        {/* <div id="modal-01" className="modal-wrapper">
          <div
            className="modal-overlay"
            // onClick="closeModal('modal-01');"
          ></div>
          <div className="custom-modal system-modal">
            <div className="modal-content-wrap">
              <h2 className="modal-ttl">AI 실시간 주가 예측 현황</h2>
              <div className="modal-content">
                <p className="modal-desc">
                  1. 누적 예측수는 AI가 예측한 종복의 수입니다. <br />
                  2. 예측률 = 예측 달성 종목/누적 예측수 <br />
                  3. 투자 수익금은 AI 예측 기반 매수&매도 진행한 결과입니다.
                  <br />
                  <br />
                  *예측 달성 종목의 기준은 예측 이후 특정기간동안 예측한 주가의
                  기울기와 같이 움직인 정도입니다
                </p>
              </div>
            </div>
            <div className="modal-btn-wrap">
              <button
                type="button"
                // onClick="closeModal('modal-01');"
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>

        <div id="modal-02" className="modal-wrapper">
          <div
            className="modal-overlay"
            // onClick="closeModal('modal-02');"
          ></div>
          <div className="custom-modal system-modal">
            <div className="modal-content-wrap">
              <h2 className="modal-ttl">AI 예측 솔루션</h2>
              <div className="modal-content">
                <p className="modal-desc">
                  프랙탈 솔루션은 Top-down기반, 기업 펀더멘탈과 모멘텀 중심의
                  다차원분석 AI로 검증된 종목을 엘리어트파동, 유사도분석,
                  상관계수 등 혁신적인 기술적분석을 통해 주가 예측을 하며, 특히
                  '위험 한도 내' 최고의 시나리오를 제공합니다.
                </p>
              </div>
            </div>
            <div className="modal-btn-wrap">
              <button
                type="button"
                // onClick="closeModal('modal-02');"
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>

        <div id="modal-03" className="modal-wrapper">
          <div
            className="modal-overlay"
            // onClick="closeModal('modal-03');"
          ></div>
          <div className="custom-modal system-modal">
            <div className="modal-content-wrap">
              <h2 className="modal-ttl">엘리어트 파동</h2>
              <div className="modal-content">
                <p className="modal-desc">
                  엘리어트 파동은 최고의 기술적 분석 방법으로 알려져있으며
                  주가의 변화는 대자연의 법칙에 따라 일정한 규칙을 가지고
                  반복된다는 이론입니다.
                </p>
              </div>
            </div>
            <div className="modal-btn-wrap">
              <button
                type="button"
                // onClick="closeModal('modal-03');"
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>

        <div id="modal-04" className="modal-wrapper">
          <div
            className="modal-overlay"
            // onClick="closeModal('modal-04');"
          ></div>
          <div className="custom-modal system-modal">
            <div className="modal-content-wrap">
              <h2 className="modal-ttl">유사도 분석</h2>
              <div className="modal-content">
                <p className="modal-desc">
                  엘유사도 분석은 DTW 기반 예측으로 과거 유사한 패턴을 찾는
                  방식입니다.
                </p>
              </div>
            </div>
            <div className="modal-btn-wrap">
              <button
                type="button"
                // onClick="closeModal('modal-04');"
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div id="user-modal" className="modal-wrapper">
        <div
          className="modal-overlay"
          //   onClick="closeModal('user-modal');"
        ></div>
        <div className="custom-modal system-modal">
          <div className="modal-icon">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/icon/icon-modal-checked.svg"
              }
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
              //   onClick="closeModal('user-modal');"
              className="btn gray-bd-btn"
            >
              아니오
            </button>
            <button
              type="button"
              //   onClick="location.href='sign-up.html';"
              className="btn theme-solid-btn"
            >
              예
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
