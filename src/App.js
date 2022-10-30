import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import GlobalContext from "./components/globalContext/GlobalContext";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import SingleUserInfo from "./pages/single-user/SingleUserInfo";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<SingleUserInfo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
