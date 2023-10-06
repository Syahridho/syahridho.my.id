import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import Certificates from "../Certificates";
import Contact from "../Contact";
import NotFound from "../NotFound";
import Navigasi from "../../../components/Navigasi";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col overflow-hidden lg:h-screen lg:w-[1024px] xl:w-[1150px] lg:mx-auto lg:flex-row">
        <Navigasi />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
