import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";
import TradingViewWidegt from "./TradingViewWidegt";
export default function SimilarityMain() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");
  return (
    <>
      <div id="app">
        <div className="similarity-main-page l-page">
          <div class="l-page-top">
            <div class="header">
              <button type="button" class="btn back-btn" onClick={moveTo(-1)}>
                <span class="txt-hidden">뒤로 가기</span>
                <i class="ico ico-arrow-back"></i>
              </button>
              <h1 class="hd-title">유사 패턴 확인</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="section section-01">
                <div className="period-box">
                  <div className="period-item">
                    <span className="num">1</span>
                    <p className="txt">24.03.21 - 24.05.13</p>
                  </div>
                  <div className="period-item">
                    <span className="num">1</span>
                    <p className="txt">24.06.11 - 24.12.21</p>
                  </div>
                </div>
                <dl className="detail-list type-sm">
                  <dt className="ttl">일치율</dt>
                  <dd className="detail">
                    <span className="red-txt">00.00%</span>
                  </dd>
                </dl>
                <div className="gradient-box">
                  <div className="box-content">
                    <dt className="ttl">상승 확률</dt>
                    <dd className="detail">
                      <span id="odometer01" className="odometer">
                        120
                      </span>
                      %
                    </dd>
                  </div>
                  <div className="box-content">
                    <dt className="ttl">20일 후 예상 수익</dt>
                    <dd className="detail">
                      <span id="odometer02" className="odometer">
                        15
                      </span>
                      %
                    </dd>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl">삼성전자</h3>
                </div>

                <div className="box-content">
                  <div className="chart-area" style={{ height: "780px" }}>
                    <TradingViewWidegt symbol={symbol} />
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>

      <div id="user-modal" className="modal-wrapper">
        <div
          className="modal-overlay"
          //   onClick="closeModal('user-modal');"
        ></div>
        <div className="custom-modal system-modal">
          <div className="modal-icon">
            <img
              src="assets/images/icon/icon-modal-checked.svg"
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
      </div>
    </>
  );
}
