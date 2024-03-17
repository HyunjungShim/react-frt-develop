import "./assets/css/odometer.css";
import "./assets/css/reset.css";
import "./assets/css/ui.css";
import "./assets/css/pages.css";
import { Routes, Route } from "react-router-dom";

// 메인 접속시
import MainView from "./views/MainView";

// 도입부 , 회원가입 , 로그인
import Intro from "./views/UserView";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";

// 메인 eillot 파동 플랫폼 클릭시
import ElliottMain from "./components/ElliottMain";
// 메인 유사도 분석 플랫폼 클릭시
import SimilarityMain from "./components/SimilarityMain";

// ai main
import AIMain from "./components/AIMain";
// ai search main
import AISearch from "./components/AISearch";
// ai recommend chart
import AIRecommendChart from "./components/AIRecommendChart";
// ai search chart
import AISearchChart from "./components/AISearchChart";
// ai investor main
import AIInvestorMain from "./components/AIInvestorMain";
import AIInvestorDetail from "./components/AIInvestorDetail";
import DetailMain from "./components/DetailMain";
// 더보기 메인1
import MainMore1 from "./components/MainMore1";
import MainMore2 from "./components/MainMore2";
import MainMore3 from "./components/MainMore3";
import MainMoreChart1 from "./components/MainMoreChart1";
// 시그널 메인
import SignalMain from "./components/SignalMain";

// 관심 종목
import LikeList from "./components/like/LikeList";
import LikeHoldList from "./components/like/LikeHoldList";
import LikeAddSearch from "./components/like/LikeAddSearch";
import LikeEdit from "./components/like/LikeEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainView />} />
        <Route path="/" element={<Intro />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/detail-elliott-main" element={<ElliottMain />} />
        <Route path="/detail-similarity-main" element={<SimilarityMain />} />
        <Route path="/ai-search-main" element={<AISearch />} />
        <Route path="/ai-investor-main" element={<AIInvestorMain />} />
        <Route path="/ai-investor-detail" element={<AIInvestorDetail />} />
        <Route path="/ai-main" element={<AIMain />} />
        <Route path="/ai-recommend-chart" element={<AIRecommendChart />} />
        <Route path="/ai-search-chart" element={<AISearchChart />} />
        <Route path="/main-more-01" element={<MainMore1 />} />
        <Route path="/main-more-02" element={<MainMore2 />} />
        <Route path="/main-more-chart01" element={<MainMoreChart1 />} />
        <Route path="/main-more-03" element={<MainMore3 />} />
        <Route path="/signal-main" element={<SignalMain />} />
        <Route path="/detail-main" element={<DetailMain />} />
        {/* 관심종목 */}
        <Route path="/like-list" element={<LikeList />} />
        <Route path="/like-hold-list" element={<LikeHoldList />} />
        <Route path="/like-edit" element={<LikeEdit />} />
        <Route path="/like-add-search" element={<LikeAddSearch />} />
      </Routes>
    </>
  );
}

export default App;
