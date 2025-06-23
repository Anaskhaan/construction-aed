// src/components/CookieBanner.jsx
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setVisible(false);
    // Initialize analytics/tracking cookies here if needed
  };

  const declineCookies = () => {
    Cookies.set("cookieConsent", "declined", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-t-lg border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            <p>
              We use cookies to enhance your experience. By continuing to visit
              this site, you agree to our use of cookies.{" "}
              <Link
                to="/CookiesPolicy"
                className="text-[#0163b3] hover:underline font-medium"
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm font-medium text-[#0163b3] border border-[#0163b3] rounded-md hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-[#0163b3] rounded-md hover:bg-[#0153a3] transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
