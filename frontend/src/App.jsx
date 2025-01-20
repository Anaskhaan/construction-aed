// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Terms from "./pages/Terms";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import GetQuote from "./pages/GetQuote";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Blogs" element={<Blogs />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Terms" element={<Terms />} />
//           <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
//           <Route path="/GetQuote" element={<GetQuote />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetQuote from "./pages/GetQuote";
import { Toaster } from "react-hot-toast";

function App() {
  return (
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
