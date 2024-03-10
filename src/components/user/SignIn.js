export default function Signin() {
  return (
    <>
      <div id="app">
        <div class="signin-page l-page">
          <div class="l-page-top"></div>

          <div class="l-page-mid">
            <div class="l-page-content">
              <div class="left-title-wrap">
                <h1 class="title type-lg">Comfort & Ease</h1>
                <p class="title-desc">로그인 해주세요.</p>
              </div>
              <div class="form-item-grp">
                <div class="form-item">
                  <div class="form-inp-wrap">
                    <input
                      type="text"
                      placeholder="아이디를 입력하세요"
                      class="form-inp type-warning"
                    />
                  </div>
                </div>
                <div class="form-item">
                  <div class="form-inp-wrap">
                    <input
                      type="password"
                      autocomplete="new-password"
                      placeholder="비밀번호를 입력하세요"
                      class="form-inp"
                    />
                  </div>
                </div>
              </div>
              <div class="page-btn-wrap">
                <button
                  type="button"
                  onclick="location.href='main.html';"
                  class="btn btn-w100 theme-solid-btn"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>

          <div class="l-page-bottom"></div>
        </div>
      </div>

      <div id="user-modal" class="modal-wrapper">
        <div class="modal-overlay" onclick="closeModal('user-modal');"></div>
        <div class="custom-modal system-modal">
          <div class="modal-icon">
            <img
              src="assets/images/icon/icon-modal-checked.svg"
              alt="모달 아이콘"
              class="icon icon-32"
            />
          </div>
          <div class="modal-content-wrap">
            <h2 class="modal-ttl">회원 전용 서비스입니다</h2>
            <div class="modal-content">
              <p class="modal-ttl type-md">프렉탈 솔루션에 가입하시겠습니까?</p>
              <p class="modal-desc">
                프렉탈 솔루션에 가입하셔서 <br />
                누구보다 편안한 투자를 경험해보세요!
              </p>
            </div>
          </div>
          <div class="modal-btn-wrap">
            <button
              type="button"
              onclick="closeModal('user-modal');"
              class="btn gray-bd-btn"
            >
              아니오
            </button>
            <button
              type="button"
              onclick="location.href='sign-up.html';"
              class="btn theme-solid-btn"
            >
              예
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
