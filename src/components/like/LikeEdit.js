import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LikeEdit() {
  const navigate = useNavigate();
  const moveTo = (path) => {
    return () => {
      //   console.log(`Moving to ${path}`);
      navigate(path);
      //   console.log(navigate(path));
    };
  };
  const [tab1, setTab1] = useState(0);

  const [modal01, setModal01] = useState(false);

  return (
    <>
      <div className="like-edit-page l-page">
        <div className="l-page-top">
          <div className="header">
            <button type="button" className="btn back-btn" onClick={moveTo(-1)}>
              <span className="txt-hidden">뒤로 가기</span>
              <i className="ico ico-arrow-back"></i>
            </button>
            <h1 className="hd-title">관심종목 편집</h1>
          </div>
        </div>

        <div className="l-page-mid">
          <div className="l-page-content">
            <div id="tabs01" className="tabs type-02">
              <button
                type="button"
                onClick={() => {
                  setTab1(0);
                }}
                className={"tab " + (tab1 == 0 ? "active" : "")}
              >
                종목 편집
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab1(1);
                }}
                className={"tab " + (tab1 == 1 ? "active" : "")}
              >
                그룹 편집
              </button>
            </div>
            <div id="tabs01-contents" className="tab-content-container">
              <div
                id="tab01-01"
                className={"tab-content " + (tab1 == 0 ? "active" : "")}
              >
                <div className="stock-item-btn-grp">
                  <div className="stock-item-btn btn">
                    <button type="button" className="btn move-btn">
                      <i className="ico ico-move"></i>
                      <span className="txt">KODEX 반도체</span>
                    </button>
                    <button type="button" className="btn del-btn">
                      <i className="ico ico-del"></i>
                      <span className="txt">삭제하기</span>
                    </button>
                  </div>
                  <div className="stock-item-btn btn">
                    <button type="button" className="btn move-btn">
                      <i className="ico ico-move"></i>
                      <span className="txt">기아</span>
                    </button>
                    <button type="button" className="btn del-btn">
                      <i className="ico ico-del"></i>
                      <span className="txt">삭제하기</span>
                    </button>
                  </div>
                  <div className="stock-item-btn btn">
                    <button type="button" className="btn move-btn">
                      <i className="ico ico-move"></i>
                      <span className="txt">기아</span>
                    </button>
                    <button type="button" className="btn del-btn">
                      <i className="ico ico-del"></i>
                      <span className="txt">삭제하기</span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="tab01-02"
                className={"tab-content " + (tab1 == 1 ? "active" : "")}
              >
                <div className="stock-gp-btn-grp">
                  <div className="stock-gp-btn">
                    <button type="button" className="btn move-btn">
                      <i className="ico ico-move"></i>
                      <span className="txt">그룹 A (99)</span>
                    </button>
                    <div className="btn-grp">
                      <button type="button" className="btn">
                        <i className="ico ico-edit-gray"></i>
                        <span>변경하기</span>
                      </button>
                      <button type="button" className="btn">
                        <i className="ico ico-del"></i>
                        <span>삭제하기</span>
                      </button>
                    </div>
                  </div>
                  <div className="stock-gp-btn">
                    <button type="button" className="btn move-btn">
                      <i className="ico ico-move"></i>
                      <span className="txt">2차전지 (12)</span>
                    </button>
                    <div className="btn-grp">
                      <button type="button" className="btn">
                        <i className="ico ico-edit-gray"></i>
                        <span>변경하기</span>
                      </button>
                      <button type="button" className="btn">
                        <i className="ico ico-del"></i>
                        <span>삭제하기</span>
                      </button>
                    </div>
                  </div>
                  <div className="stock-gp-btn">
                    <button type="button" className="btn move-btn">
                      <i className="ico ico-move"></i>
                      <span className="txt">바이오 (3)</span>
                    </button>
                    <div className="btn-grp">
                      <button type="button" className="btn">
                        <i className="ico ico-edit-gray"></i>
                        <span>변경하기</span>
                      </button>
                      <button type="button" className="btn">
                        <i className="ico ico-del"></i>
                        <span>삭제하기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="l-page-bottom">
          <div className="bottom-page-btn-grp">
            <button
              type="button"
              onClick={() => {
                setModal01(true);
              }}
              className="btn btn-w100 lightblue-solid-btn"
            >
              관심그룹 추가
            </button>
            <button type="button" className="btn btn-w100 theme-solid-btn">
              확인
            </button>
          </div>
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
        <div className="custom-modal system-modal like-edit-modal">
          <div className="modal-ttl-wrap">
            <h2 className="modal-ttl">관심그룹 추가</h2>
          </div>
          <div className="modal-content-wrap">
            <div className="modal-content">
              <div className="form-item">
                <label className="form-label">관심그룹명</label>
                <div className="form-inp-wrap">
                  <input
                    type="text"
                    placeholder="관심그룹명을 입력하세요"
                    className="form-inp"
                  />
                </div>
              </div>
              <div className="form-item">
                <label className="form-label">새 그룹 위치</label>
                <div className="form-inp-wrap">
                  <label for="position-top" className="checkbox-item">
                    <input
                      id="position-top"
                      type="checkbox"
                      className="checkbox-inp"
                    />
                    <label for="position-top" className="checkbox"></label>
                    <span className="checkbox-txt">맨 위</span>
                  </label>
                  <label for="position-bottom" className="checkbox-item">
                    <input
                      id="position-bottom"
                      type="checkbox"
                      className="checkbox-inp"
                    />
                    <label for="position-bottom" className="checkbox"></label>
                    <span className="checkbox-txt">맨 아래</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-btn-wrap">
              <button
                type="button"
                onClick={() => {
                  setModal01(false);
                }}
                className="btn gray-bd-btn"
              >
                취소
              </button>
              <button type="button" className="btn theme-solid-btn">
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
