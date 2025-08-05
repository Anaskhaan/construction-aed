export default function PrivacyPolicy() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-4">
            Swifttakeoffs.com values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website{" "}
            <a
              href="https://swifttakeoffs.com"
              className="text-blue-600 hover:underline"
            >
              swifttakeoffs.com
            </a>. By accessing the Site, you agree to the practices described in this policy.
          </p>
        </div>

        {/* Collection of Personal Data */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Collection of Personal Data</h2>

          <h3 className="text-md sm:text-lg font-semibold mb-2">
            1.1 Voluntary Submission of Information
          </h3>
          <p className="text-gray-600 mb-4">
            When you engage with our Site, we may collect personal data that you voluntarily provide. This includes your name, email address, phone number, and any other information you choose to submit through our contact forms or communication tools.
          </p>

          <h3 className="text-md sm:text-lg font-semibold mb-2">
            1.2 Collection of Usage Information
          </h3>
          <p className="text-gray-600 mb-4">
            We also collect non-personal information about your interaction with our Site. This may include your IP address, browser type, device type, operating system, and usage behavior. We use cookies and other tracking technologies to gather this information.
          </p>
        </section>

        {/* Usage of Data */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Usage of Your Data</h2>

          <h3 className="text-md sm:text-lg font-semibold mb-2">
            2.1 Service Delivery and Improvement
          </h3>
          <p className="text-gray-600 mb-4">
            We use the information you provide to deliver our estimating services, respond to your inquiries, and improve the functionality and user experience of our Site.
          </p>

          <h3 className="text-md sm:text-lg font-semibold mb-2">
            2.2 Communication and Updates
          </h3>
          <p className="text-gray-600 mb-4">
            With your consent, we may contact you via SMS to provide updates regarding your estimates, inquiries, or project status. These are transactional messages only.
          </p>
        </section>

        {/* SMS Consent Section */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            SMS Consent and Compliance
          </h2>
          <p className="text-gray-600 mb-4">
            By providing your phone number and opting in, you consent to receive text messages from Swifttakeoffs.com. These messages are related to services you have requested.
          </p>
          <p className="text-gray-600 mb-4">
            We do not use SMS for promotional or marketing purposes.
          </p>
          <p className="text-gray-600 mb-4">
            Message frequency varies. Message and data rates may apply.
          </p>
          <p className="text-gray-600 mb-4">
            You can opt out of SMS communications at any time by replying: STOP, QUIT, END, REVOKE, OPT OUT, CANCEL, or UNSUBSCRIBE.
          </p>
        </section>

        {/* Data Protection Section */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Data Protection Measures
          </h2>
          <p className="text-gray-600 mb-4">
            We use appropriate technical and organizational measures to safeguard your personal data against unauthorized access, disclosure, or misuse. While we strive to protect your data, no method of transmission over the internet or electronic storage is completely secure.
          </p>
        </section>

        {/* Data Sharing Policy */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Data Sharing Policy
          </h2>
          <p className="text-gray-600 mb-4">
            Swifttakeoffs.com does not share your personal or mobile information with third parties or affiliates for marketing or promotional purposes.
          </p>
          <p className="text-gray-600 mb-4">
            All categories of data sharing exclude SMS originator opt-in data and consent; this information will never be shared with any third parties.
          </p>
        </section>

        {/* Updates Section */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Updates to This Privacy Policy
          </h2>
          <p className="text-gray-600 mb-4">
            This policy may be updated from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on our website with the effective date. We encourage you to review this page periodically.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions regarding this policy, please contact us at:
          </p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Email: info@swifttakeoffs.com</li>
            <li>Phone: +1 929 566 4866</li>
            <li>Website: <a href="https://swifttakeoffs.com" className="text-blue-600 hover:underline">https://swifttakeoffs.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
