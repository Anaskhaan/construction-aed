import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetQuote from "./pages/GetQuote";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/GetQuote" element={<GetQuote />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
