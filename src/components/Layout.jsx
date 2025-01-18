import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
        {/* Outlet renders the matched route's element */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
