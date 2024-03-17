import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
export default function LikeList() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  const [modal01, setModal01] = useState(false);
  return (
    <>
      <div id="app">
        <div className="like-list-page l-page">
          <div className="l-page-top">
            <div className="header type-lg">
              <h1 className="hd-title type-lg">관심종목</h1>
            </div>
          </div>

          <div className="l-page-mid">
            <div className="l-page-content">
              <div className="top-page-btn-grp">
                <button
                  onClick={() => {
                    setModal01(true);
                  }}
                  type="button"
                  className="btn like-gray-bd-btn type-01"
                >
                  <span className="txt">그룹 A (99)</span>
                  <i className="ico ico-like-edit"></i>
                </button>
                <button
                  type="button"
                  onClick={moveTo("/like-hold-list")}
                  className="btn like-gray-bd-btn type-02"
                >
                  <span className="txt">보유현황</span>
                </button>
              </div>
              <section className="section">
                <div className="tbl type-04">
                  <div className="tbl-head">
                    <ul className="tr">
                      <li className="th ta-left">종목명</li>
                      <li className="th">현재가</li>
                      <li className="th">등락(대비)</li>
                      <li className="th">거래량</li>
                    </ul>
                  </div>
                  <div className="tbl-body">
                    <ul className="tr">
                      <li className="td ta-left">
                        <b className="name">KODEX 반도체</b>
                      </li>
                      <li className="td">
                        <b className="blue-txt">36,095</b>
                      </li>
                      <li className="td">
                        <div className="info-txt-grp blue-txt">
                          <span className="info-txt">▼ -1.29%</span>
                          <span className="info-txt type-sm">470</span>
                        </div>
                      </li>
                      <li className="td">58,000</li>
                    </ul>
                    <ul className="tr">
                      <li className="td ta-left">
                        <b className="name">기아</b>
                      </li>
                      <li className="td">
                        <b className="blue-txt">115,095</b>
                      </li>
                      <li className="td">
                        <div className="info-txt-grp red-txt">
                          <span className="info-txt">▼ -1.29%</span>
                          <span className="info-txt type-sm">470</span>
                        </div>
                      </li>
                      <li className="td">2,159,000</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="l-page-bottom">
            <div className="bottom-page-btn-grp">
              <button
                type="button"
                onClick={moveTo("/like-edit")}
                className="btn lightblue-solid-btn"
              >
                편집
              </button>
              <button
                type="button"
                onClick={moveTo("/like-add-search")}
                className="btn theme-solid-btn"
              >
                + 관심 종목 추가
              </button>
            </div>
            <Footer />
          </div>
        </div>

        <div
          id="modal-01"
          className={"modal-wrapper " + (modal01 ? "active" : "")}
        >
          <div
            className="modal-overlay"
            onClick={() => {
              setModal01(false);
            }}
          ></div>
          <div className="custom-modal bottom-sheet-modal like-list-bottom-modal">
            <div className="modal-ttl-wrap">
              <h3 className="modal-ttl">관심종목</h3>
              <button
                type="button"
                className="btn close-btn"
                onClick={() => {
                  setModal01(false);
                }}
              >
                <span className="txt-hidden">모달 닫기</span>
                <i className="ico ico-x"></i>
              </button>
            </div>
            <div className="modal-content-wrap">
              <div className="btn-grp">
                <button type="button" className="btn gray-bd-btn active">
                  <i className="ico ico-grp-list"></i>
                  <span className="txt">그룹 A (99)</span>
                </button>
                <button type="button" className="btn gray-bd-btn">
                  <i className="ico ico-grp-list"></i>
                  <span className="txt">2차전지 (12)</span>
                </button>
                <button type="button" className="btn gray-bd-btn">
                  <i className="ico ico-grp-list"></i>
                  <span className="txt">바이오 (3)</span>
                </button>
              </div>
            </div>
            <div className="modal-btn-wrap">
              <button
                type="button"
                onClick={moveTo("/like-edit")}
                className="btn btn-w100 theme-solid-btn"
              >
                그룹 편집
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
