import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Components/Sidebar/Sidebar";
import Aboutme from "./Pages/Aboutme/Aboutme";
import Formation from "./Pages/Formation/Formation";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Sidebar />
      <div className="pages">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
