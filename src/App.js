import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import GlobalContext from "./components/globalContext.js/GlobalContext";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import SingleUserInfo from "./pages/single-user/SingleUserInfo";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<SingleUserInfo />} />
        </Routes>
        <Footer />
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
