// src/pages/CookiesPolicy.jsx
// import { Helmet } from "react-helmet-async";

export default function CookiesPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* SEO Meta Tags */}
      {/* <Helmet>
        <title>Cookies Policy | Your Website Name</title>
        <meta
          name="description"
          content="Learn how we use cookies to enhance your experience on our website."
        />
      </Helmet> */}

      {/* Header */}
      <div className="mb-8 text-center pt-20">
        <h1 className="text-4xl font-bold text-[#0163b3] mb-2">
          Cookies Policy
        </h1>
        <p className="text-gray-600">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Content Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#0163b3] mb-4">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-700 mb-4">
            Cookies are small text files stored on your device when you visit
            websites. Like most sites, we use cookies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Remember your preferences</li>
            <li>Analyze site traffic</li>
            <li>Personalize content</li>
            <li>Improve user experience</li>
          </ul>
        </section>

        {/* 2. Types of Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#0163b3] mb-4">
            2. Cookies We Use
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-[#0163b3] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Cookie Type</th>
                  <th className="px-4 py-3 text-left">Purpose</th>
                  <th className="px-4 py-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Essential</td>
                  <td className="px-4 py-3">
                    Site functionality (e.g., login)
                  </td>
                  <td className="px-4 py-3">Session</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Preferences</td>
                  <td className="px-4 py-3">Remember settings (e.g., theme)</td>
                  <td className="px-4 py-3">1 year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Analytics</td>
                  <td className="px-4 py-3">
                    Visitor statistics (Google Analytics)
                  </td>
                  <td className="px-4 py-3">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Cookie Management */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#0163b3] mb-4">
            3. Managing Cookies
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Browser Controls:</strong> You can manage cookies through
              your browser settings:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0163b3] hover:underline"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0163b3] hover:underline"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0163b3] hover:underline"
                >
                  Safari
                </a>
              </li>
            </ul>
            <p>
              <strong>Our Consent Tool:</strong> Use the cookie banner at the
              bottom of the page to change preferences.
            </p>
          </div>
        </section>

        {/* 4. Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0163b3] mb-4">
            4. Contact Us
          </h2>
          <p className="text-gray-700">
            For questions about this policy: <br />
            <a
              href="mailto:privacy@yourdomain.com"
              className="text-[#0163b3] hover:underline"
            >
              privacy@swifttakeoffs.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
