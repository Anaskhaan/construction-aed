import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetQuote from "./pages/GetQuote";
import { Toaster } from "react-hot-toast";
import MEP from "./pages/services/MEP";

import Home from "./components/HOMESECTIONS/Home";
import About from "./pages/About";
import ServicePage from "./pages/trades/ServicePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="getquote" element={<GetQuote />} />
            <Route
              path="existingconditions"
              element={<ServicePage route="existingconditions" />}
            />
            <Route path="concrete" element={<ServicePage route="concrete" />} />
            <Route path="masonary" element={<ServicePage route="masonary" />} />
            <Route path="metals" element={<ServicePage route="metals" />} />
            <Route path="mep" element={<MEP />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
