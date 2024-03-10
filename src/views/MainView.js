import MainTest from "../components/MainTest";
// 모달 context
import { ModalProvider } from "../components/ModalContext";
export default function MainView() {
  return (
    <ModalProvider>
      <MainTest />
    </ModalProvider>
  );
}
