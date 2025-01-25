import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetQuote from "./pages/GetQuote";
import { Toaster } from "react-hot-toast";

import Home from "./components/HOMESECTIONS/Home";
import About from "./pages/About";
import TradesPage from "./pages/trades/TradesPage";
import ServicesPage from "./pages/services/ServicesPage"
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
              element={<TradesPage route="existingconditions" />}
            />
            <Route path="concrete" element={<TradesPage route="concrete" />} />
            <Route path="masonary" element={<TradesPage route="masonary" />} />
            <Route path="metals" element={<TradesPage route="metals" />} />
            <Route path="ConveyEquip" element={<TradesPage route="ConveyEquip" />} />
            <Route path="mep" element={<ServicesPage route="mep" />} />
            <Route path="CES" element={<ServicesPage route="CES" />} />
            <Route path="PES" element={<ServicesPage route="PES" />} />
            <Route path="DS" element={<ServicesPage route="DS" />} />
            <Route path="MTS" element={<ServicesPage route="MTS" />} />
            <Route path="DTS" element={<ServicesPage route="DTS" />} />
            <Route path="LTS" element={<ServicesPage route="LTS" />} />
            <Route path="SET" element={<ServicesPage route="SET" />} />
            
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
