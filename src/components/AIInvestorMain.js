import { useNavigate } from "react-router-dom";

export default function AIInvestorMain() {
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
        <div className="ai-investor-main-page l-page">
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
              <h1 className="hd-title">세계 투자자 리스트</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="user-item-wrap">
                <div className="tbl-head">
                  <span className="th">투자자명</span>
                  <span className="th">운용규모</span>
                </div>
                <ul className="list-grp">
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/img/img-default-user.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">이재용</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-blue">12조원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-ludvig.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Ludvig</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-blue">12조원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-jessica.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Jessica</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-mint">1233억원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-foto.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Foto Sushi</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-mint">2조원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-ali.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Ali Morshediou</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-mint">455억원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-rachel.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Rachel</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-mint">986억원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-mike.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Mike</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-blue">3조원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-christina.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Christina</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-mint">3011억원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-sergio.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Sergio de Paula</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-mint">282억원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <div
                      className="user-item"
                      onclick="location.href='ai-investor-detail.html';"
                    >
                      <figure className="thumbnail">
                        <img
                          src="assets/images/sample/img-sample-metin.png"
                          alt="프로필 사진"
                          className="thumbnail-img"
                        />
                      </figure>
                      <h3 className="name">Metin Ozer</h3>
                      <div className="mg-left">
                        <button type="button" className="btn arrow-btn">
                          <span className="badge type-blue">123조원</span>
                          <img
                            src="assets/images/icon/icon-arrow-right-sm.svg"
                            className="icon icon-16"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="l-page-bottom"></div>
        </div>
      </div>
    </>
  );
}
