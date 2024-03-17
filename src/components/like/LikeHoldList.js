import { useNavigate } from "react-router-dom";
export default function LikeHoldList() {
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
        <div className="like-hold-list-page l-page">
          <div className="l-page-top">
            <div className="header">
              <button
                type="button"
                className="btn back-btn"
                onClick={moveTo("/like-list")}
              >
                <span className="txt-hidden">뒤로 가기</span>
                <i className="ico ico-arrow-back"></i>
              </button>
              <h1 className="hd-title">보유현황</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <section className="section">
                <div className="tbl type-04">
                  <div className="tbl-head">
                    <ul className="tr">
                      <li className="th ta-left">종목명</li>
                      <li className="th">현재가</li>
                      <li className="th">보유현황</li>
                    </ul>
                  </div>
                  <div className="tbl-body">
                    <ul className="tr">
                      <li className="td ta-left">
                        <b className="name">KODEX 반도체</b>
                      </li>
                      <li className="td">
                        <span className="blue-txt">-2.5%</span>
                      </li>
                      <li className="td">
                        <span className="badge type-hold">보유중</span>
                      </li>
                    </ul>
                    <ul className="tr">
                      <li className="td ta-left">
                        <b className="name">KODEX 반도체</b>
                      </li>
                      <li className="td">
                        <span className="red-txt">2.5%</span>
                      </li>
                      <li className="td">
                        <span className="badge">관망중</span>
                      </li>
                    </ul>
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
