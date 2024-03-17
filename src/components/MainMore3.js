import { useNavigate } from "react-router-dom";
export default function MainMore3() {
  const navigate = useNavigate();

  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  return (
    <>
      <div id="app">
        <div class="main-more-03-page l-page">
          <div class="l-page-top">
            <div class="header">
              <button
                type="button"
                class="btn back-btn"
                onClick={moveTo("/main")}
              >
                <span class="txt-hidden">뒤로 가기</span>
                <i class="ico ico-arrow-back"></i>
              </button>
            </div>
          </div>

          <div class="l-page-mid">
            <div class="l-page-content">
              <div class="page-title-wrap">
                <h1 class="title">실시간 TOP 10 뉴스</h1>
                <p class="title-desc">
                  실시간 뉴스의 종목 예측현황을 확인해보세요.
                </p>
              </div>
              <section class="section">
                <div class="list-row">
                  <h2 class="list-title">TOP 1</h2>
                  <div class="list-item-card">
                    <div class="list-item">
                      <span class="badge type-hold">보유중</span>
                      <h3 class="ttl">이수페타시스</h3>
                      <button
                        type="button"
                        class="btn"
                        onClick={moveTo("/ai-search-chart")}
                      >
                        <span class="percent-txt type-blue">- 00.00%</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          class="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                    <p class="news-txt">
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
                <div class="list-row">
                  <h2 class="list-title">TOP 2</h2>
                  <div class="list-item-card">
                    <div class="list-item">
                      <span class="badge">관망중</span>
                      <h3 class="ttl">센서뷰</h3>
                      <button
                        type="button"
                        class="btn"
                        onClick={moveTo("/ai-search-chart")}
                      >
                        <span class="percent-txt type-red">+ 00.00%</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          class="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                    <p class="news-txt">
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
                <div class="list-row">
                  <h2 class="list-title">TOP 3</h2>
                  <div class="list-item-card">
                    <div class="list-item">
                      <span class="badge type-hold">보유중</span>
                      <h3 class="ttl">어보브반도체</h3>
                      <button
                        type="button"
                        class="btn"
                        onClick={moveTo("/ai-search-chart")}
                      >
                        <span class="percent-txt type-red">+ 00.00%</span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-arrow-right-sm.svg"
                          }
                          class="icon icon-16"
                          alt="바로가기 아이콘"
                        />
                      </button>
                    </div>
                    <p class="news-txt">
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
            </div>
          </div>

          <div class="l-page-bottom"></div>
        </div>
      </div>
    </>
  );
}
