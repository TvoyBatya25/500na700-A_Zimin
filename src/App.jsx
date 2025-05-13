import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Accordion from "./components/Accordion/Accordion.jsx";
import Footer from "./components/Footer.jsx";
import NewsPage from "./components/News/NewsPage.jsx";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setModalActive(true)}></Header>
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      <NewsPage></NewsPage>
      <Accordion></Accordion>
      <Footer></Footer>
    </>
  );
}

export default App;
