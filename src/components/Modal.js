import { useModal } from "./ModalContext";
export default function Modal() {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <>
      {isModalOpen.modal01 && (
        <div
          id="modal-01"
          className={"modal-wrapper " + (isModalOpen.modal01 ? "active" : "")}
        >
          <div
            className="modal-overlay"
            onClick={() => toggleModal("modal01")}
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
                onClick={() => toggleModal("modal01")}
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen.modal02 && (
        <div
          id="modal-02"
          className={"modal-wrapper " + (isModalOpen.modal02 ? "active" : "")}
        >
          <div
            className="modal-overlay"
            onClick={() => toggleModal("modal02")}
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
                onClick={() => toggleModal("modal02")}
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen.modal03 && (
        <div
          id="modal-03"
          className={"modal-wrapper " + (isModalOpen.modal03 ? "active" : "")}
        >
          <div
            className="modal-overlay"
            onClick={() => toggleModal("modal03")}
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
                onClick={() => toggleModal("modal03")}
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen.modal04 && (
        <div
          id="modal-04"
          className={"modal-wrapper " + (isModalOpen.modal04 ? "active" : "")}
        >
          <div
            className="modal-overlay"
            onClick={() => toggleModal("modal04")}
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
                onClick={() => toggleModal("modal04")}
                className="btn theme-solid-btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
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
