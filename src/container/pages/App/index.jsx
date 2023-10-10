import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import Certificates from "../Certificates";
import Contact from "../Contact";
import NotFound from "../NotFound";
import Navigasi from "../../../components/Navigasi";
import Detail from "../Projects/Detail";
import { Provider } from "react-redux";
import storeRedux from "../../../config/redux/store";

const App = () => {
  return (
    <Router>
      <Provider store={storeRedux}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
