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
import ServicesPage from "./pages/services/ServicesPage";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Trades from "./pages/Trades";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* blogs */}
            <Route path="blogslist" element={<BlogList />} />
            <Route path="blogsdetail/:id" element={<BlogDetail />} />
            {/* / */}
            <Route path="about" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="getquote" element={<GetQuote />} />
            <Route path="trades" element={<Trades />} />
            <Route
              path="existingconditions"
              element={<TradesPage route="existingconditions" />}
            />
            <Route path="concrete" element={<TradesPage route="concrete" />} />
            <Route path="masonary" element={<TradesPage route="masonary" />} />
            <Route path="metals" element={<TradesPage route="metals" />} />

            <Route path="Wpc" element={<TradesPage route="Wpc" />} />
            <Route path="Tmp" element={<TradesPage route="Tmp" />} />
            <Route path="Opening" element={<TradesPage route="Opening" />} />
            <Route path="finishes" element={<TradesPage route="finishes" />} />
            <Route
              path="specialities"
              element={<TradesPage route="specialities" />}
            />
            <Route
              path="equipment"
              element={<TradesPage route="equipment" />}
            />
            <Route
              path="furnishies"
              element={<TradesPage route="furnishies" />}
            />
            <Route path="special" element={<TradesPage route="special" />} />
            <Route
              path="conveying"
              element={<TradesPage route="conveying" />}
            />
            <Route path="FSE" element={<TradesPage route="FSE" />} />
            <Route path="PSE" element={<TradesPage route="PSE" />} />
            <Route path="MS" element={<TradesPage route="MS" />} />
            <Route path="HVAC" element={<TradesPage route="HVAC" />} />
            <Route
              path="electrical"
              element={<TradesPage route="electrical" />}
            />
            <Route
              path="earthwork"
              element={<TradesPage route="earthwork" />}
            />
            <Route path="exterior" element={<TradesPage route="exterior" />} />
            <Route
              path="utilities"
              element={<TradesPage route="utilities" />}
            />
            {/* <Route path="mep" element={<MEP />} /> */}
            <Route path="CES" element={<ServicesPage route="CES" />} />
            <Route path="PES" element={<ServicesPage route="PES" />} />
            <Route path="RES" element={<ServicesPage route="RES" />} />
            <Route path="CoES" element={<ServicesPage route="CoES" />} />
            <Route path="IES" element={<ServicesPage route="IES" />} />
            <Route path="PRES" element={<ServicesPage route="PRES" />} />
            <Route path="GCES" element={<ServicesPage route="GCES" />} />
            <Route path="SES" element={<ServicesPage route="SES" />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
