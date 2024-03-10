import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MainMore1() {
  const navigate = useNavigate();

  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  const [toggleModal, setToggleModal] = useState(false);

  const toggleFunc = () => {
    setToggleModal(!toggleModal);
  };
  return (
    <>
      <div id="app">
        <div className="main-more-01-page l-page">
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
              <h1 className="hd-title">예측결과 내역보기</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="bd-section">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl">2023년 최고 수익률</h3>
                  <button type="button" className="btn" onClick={toggleFunc}>
                    <span className="txt-hidden">최고 수익률 팝업 보기</span>
                    <i className="ico ico-bang-blue"></i>
                  </button>
                </div>

                <div className="section-content">
                  <div className="company-list-grp">
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <div className="detail-list-grp">
                          <dl className="detail-list">
                            <dt className="ttl">매수가</dt>
                            <dd className="detail-sm">
                              <b className="dark-txt">238,500</b>원
                            </dd>
                          </dl>
                          <dl className="detail-list">
                            <dt className="ttl">보유수익률</dt>
                            <dd className="detail-sm">
                              <b className="red-txt">+5.87%</b>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <span className="badge">
                          관망&nbsp;<span className="dark-txt">5</span>일째
                        </span>
                      </div>
                    </div>
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <span className="badge">
                          관망&nbsp;<span className="dark-txt">5</span>일째
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bd-section">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl">2023년 HOT 테마 종목</h3>
                </div>

                <div className="section-content">
                  <div className="company-list-grp">
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <div className="detail-list-grp">
                          <dl className="detail-list">
                            <dt className="ttl">매수가</dt>
                            <dd className="detail-sm">
                              <b className="dark-txt">238,500</b>원
                            </dd>
                          </dl>
                          <dl className="detail-list">
                            <dt className="ttl">보유수익률</dt>
                            <dd className="detail-sm">
                              <b className="red-txt">+5.87%</b>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <span className="badge">
                          관망&nbsp;<span className="dark-txt">5</span>일째
                        </span>
                      </div>
                    </div>
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <span className="badge">
                          관망&nbsp;<span className="dark-txt">5</span>일째
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bd-section">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl">2023년 HOT 테마 종목</h3>
                </div>

                <div className="section-content">
                  <div className="company-list-grp">
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <div className="detail-list-grp">
                          <dl className="detail-list">
                            <dt className="ttl">매수가</dt>
                            <dd className="detail-sm">
                              <b className="dark-txt">238,500</b>원
                            </dd>
                          </dl>
                          <dl className="detail-list">
                            <dt className="ttl">보유수익률</dt>
                            <dd className="detail-sm">
                              <b className="red-txt">+5.87%</b>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <span className="badge">
                          관망&nbsp;<span className="dark-txt">5</span>일째
                        </span>
                      </div>
                    </div>
                    <div
                      className="company-list"
                      onclick="location.href='main-more-01-chart.html';"
                    >
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
                      <div className="mg-left">
                        <span className="badge">
                          관망&nbsp;<span className="dark-txt">5</span>일째
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="l-page-bottom"></div>
        </div>

        <div
          id="modal-01"
          className={"modal-wrapper " + (toggleModal ? "active" : "")}
        >
          <div className="modal-overlay" onClick={toggleFunc}></div>
          <div className="custom-modal system-modal">
            <div className="modal-content-wrap">
              <h2 className="modal-ttl">투자수익금?</h2>
              <div className="modal-content">
                <p className="modal-desc">
                  1. 복리효과 반영 <br />
                  2. 매도시 세금과 수수료 (0.3%) 반영 <br />
                </p>
              </div>
            </div>
            <div className="modal-btn-wrap">
              <button
                type="button"
                onClick={toggleFunc}
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
