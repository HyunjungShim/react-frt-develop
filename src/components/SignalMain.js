import Footer from "./Footer";
export default function SignalMain() {
  return (
    <>
      <div id="app">
        <div className="signal-main-page l-page">
          <div className="l-page-top">
            <div className="header type-lg">
              <h1 className="hd-title type-lg">신호</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="section main-section">
                <div className="section-ttl-wrap">
                  <h3 className="section-ttl type-lg">
                    <span className="color-txt">10개 종목</span>에서 <br />
                    AI 매수 신호가 발생하였습니다.
                  </h3>
                </div>
                <div className="white-card">
                  <div className="circle-wrap">
                    <div className="circle">
                      <span className="txt">10개</span>
                    </div>
                    <span className="txt">오늘 매수 종목 수</span>
                  </div>
                  <div className="circle-wrap">
                    <div className="circle">
                      <span className="txt">20개</span>
                    </div>
                    <span className="txt">총 매수 종목 수</span>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="white-card">
                  <div className="section-ttl-wrap type-mbnarrow">
                    <h3 className="section-ttl">오늘</h3>
                    <span className="section-ttl-desc">24.02.17</span>
                  </div>
                  <div className="time-txt">
                    <span className="ico-box">
                      <i className="ico ico-bell"></i>
                    </span>
                    <span className="txt">15:00</span>
                  </div>
                  <div className="tbl type-03">
                    <div className="tbl-head">
                      <ul className="tr">
                        <li className="th ta-left">종목명</li>
                        <li className="th">매수가</li>
                        <li className="th">10일 기대수익률</li>
                        <li className="th">리스크 전략</li>
                      </ul>
                    </div>
                    <div className="tbl-body">
                      <ul className="tr">
                        <li className="td ta-left">
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
                            </div>
                          </div>
                        </li>
                        <li className="td">59,000</li>
                        <li className="td">10%</li>
                        <li className="td">58,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
