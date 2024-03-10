import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import TradingViewWidegt from "./TradingViewWidegt";
export default function ElliottMain() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      navigate(path);
    };
  };
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");
  return (
    <>
      <div id="app">
        <div className="elliott-main-page l-page">
          <div className="l-page-top">
            <div className="header">
              <button
                type="button"
                className="btn back-btn"
                onClick={moveTo("/ai-main")}
              >
                <span className="txt-hidden">뒤로 가기</span>
                <i className="ico ico-arrow-back"></i>
              </button>
              <h1 className="hd-title">엘리어트 파동</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="section-bd">
                <div className="chart-area" style={{ height: "780px" }}>
                  <TradingViewWidegt symbol={symbol} />
                </div>
              </section>
              <section className="section-bd">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl">파동 형태 분석</h3>
                </div>

                <div className="section-content">
                  <div className="shadow-box">
                    <dl className="detail-list type-sm">
                      <dt className="ttl">파동현황</dt>
                      <dd className="detail">
                        <span className="blue-txt">
                          리딩다이아고날(5-3-5-3-5)
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div className="wava-item-grp">
                    <div className="wave-item">
                      <figure className="thumbnail">
                        <img
                          src="assets/images/img/img-wave-01.png"
                          alt="리딩다이아고날 이미지"
                          className="thumbnail-img"
                        />
                      </figure>
                      <div className="info-wrap">
                        <h3 className="info-ttl">리딩다이아고날(5-3-5-3-5)</h3>
                        <ul className="info-list-grp">
                          <li className="info-list">
                            <span className="num">1.</span>
                            <p className="txt">
                              1,5파동은 임펄스 혹은 다이아고날이 될 수 있다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">2.</span>
                            <p className="txt">
                              3파동은 무조건 임펄스 파동이다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">3.</span>
                            <p className="txt">
                              3파동은 1,3,5 파동 중에서 가장 짧을 수가 없다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">4.</span>
                            <p className="txt">2파동은 삼각형이 될 수 없다.</p>
                          </li>
                          <li className="info-list">
                            <span className="num">5.</span>
                            <p className="txt">4파동은 1파동과 겹쳐야 한다.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wave-item">
                      <figure className="thumbnail">
                        <img
                          src="assets/images/img/img-wave-02.png"
                          alt="리딩다이아고날 이미지"
                          className="thumbnail-img"
                        />
                      </figure>
                      <div className="info-wrap">
                        <h3 className="info-ttl">다이아고날(3-3-3-3-3)</h3>
                        <ul className="info-list-grp">
                          <li className="info-list">
                            <span className="num">1.</span>
                            <p className="txt">
                              1,2,3 파동은 삼각형이 될수없다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">2.</span>
                            <p className="txt">
                              4,5 파동은 어느 조정 파동이 될수있다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">3.</span>
                            <p className="txt">
                              3파동은 1,3,5 파동 중 가장 짧을 수가 없다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">4.</span>
                            <p className="txt">4파동은 1파동과 겹쳐야한다.</p>
                          </li>
                          <li className="info-list">
                            <span className="num">5.</span>
                            <p className="txt">c와 5파동에서만 나온다.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wave-item">
                      <figure className="thumbnail">
                        <img
                          src="assets/images/img/img-wave-03.png"
                          alt="리딩다이아고날 이미지"
                          className="thumbnail-img"
                        />
                      </figure>
                      <div className="info-wrap">
                        <h3 className="info-ttl">임펄스(5-3-5-3-5)</h3>
                        <ul className="info-list-grp">
                          <li className="info-list">
                            <span className="num">1.</span>
                            <p className="txt">
                              1,5파동은 임펄스 혹은 다이아고날이 될 수 있다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">2.</span>
                            <p className="txt">
                              3파동은 무조건 임펄스 파동이다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">3.</span>
                            <p className="txt">
                              1,3,5 파동 중에서 3파동은 가장 짧을 수 없다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">4.</span>
                            <p className="txt">2파동은 삼각형이 될 수 없다.</p>
                          </li>
                          <li className="info-list">
                            <span className="num">5.</span>
                            <p className="txt">1파동은 4파동과 겹칠 수 없다.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wave-item">
                      <figure className="thumbnail">
                        <img
                          src="assets/images/img/img-wave-04.png"
                          alt="리딩다이아고날 이미지"
                          className="thumbnail-img"
                        />
                      </figure>
                      <div className="info-wrap">
                        <h3 className="info-ttl">지그재그(5-3-5)</h3>
                        <ul className="info-list-grp">
                          <li className="info-list">
                            <span className="num">1.</span>
                            <p className="txt">
                              A파동은 임펄스 혹은 리딩 다이아고날이 될 수 있다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">2.</span>
                            <p className="txt">
                              B파동은 어느 조정 파동이 될 수 있다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">3.</span>
                            <p className="txt">B파동은 A파동보다 짧다.</p>
                          </li>
                          <li className="info-list">
                            <span className="num">4.</span>
                            <p className="txt">
                              C파동은 임펄스 혹은 다이아고날이 될 수 있다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">5.</span>
                            <p className="txt">
                              A,C파동은 모두 다이아고날이 될 수 없다.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wave-item">
                      <figure className="thumbnail">
                        <img
                          src="assets/images/img/img-wave-05.png"
                          alt="리딩다이아고날 이미지"
                          className="thumbnail-img"
                        />
                      </figure>
                      <div className="info-wrap">
                        <h3 className="info-ttl">수렴형 삼각형(3-3-3-3-3)</h3>
                        <ul className="info-list-grp">
                          <li className="info-list">
                            <span className="num">1.</span>
                            <p className="txt">C파동은 B파동보다 짧다.</p>
                          </li>
                          <li className="info-list">
                            <span className="num">2.</span>
                            <p className="txt">D파동은 C파동보다 짧다.</p>
                          </li>
                          <li className="info-list">
                            <span className="num">3.</span>
                            <p className="txt">E파동은 D파동보다 짧다.</p>
                          </li>
                          <li className="info-list">
                            <span className="num">4.</span>
                            <p className="txt">
                              A,B,C 파동은 삼각형이 될 수 없다.
                            </p>
                          </li>
                          <li className="info-list">
                            <span className="num">5.</span>
                            <p className="txt">
                              D와 E파동은 어느 조정이 될 수 있다.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
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
          onclick="closeModal('user-modal');"
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
              onclick="closeModal('user-modal');"
              className="btn gray-bd-btn"
            >
              아니오
            </button>
            <button
              type="button"
              onclick="location.href='sign-up.html';"
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
