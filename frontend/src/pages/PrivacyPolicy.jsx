import { ArrowRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold mb-4">
            Swift Takeoffs Privacy Policy
          </h1>
          <p className="text-gray-600 mb-4">
            Swift Takeoffs values the privacy and security of your personal
            data. This policy explains how we handle your personal information
            when you interact with our website{" "}
            <a
              href="https://swifttakeoffs.com"
              className="text-blue-600 hover:underline"
            >
              swifttakeoffs.com
            </a>{" "}
            (&quot;the Site&quot;). By using the Site, you agree to be bound as
            set forth in this Privacy Policy.
          </p>
        </div>

        {/* Collection of Personal Data Section */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Collection Of Personal Data
          </h2>
          <p className="text-gray-600 mb-4">
            We use your personal and non-personal information to provide and
            improve our services.
          </p>

          <h3 className="text-md sm:text-lg font-semibold mb-2">
            Voluntary Submission of Information:
          </h3>
          <p className="text-gray-600 mb-4">
            When you engage with our Site, we may collect personal information
            that you voluntarily provide. This may include details such as your
            name, email address, contact number, and any other information you
            choose to share.
          </p>

          <h3 className="text-md sm:text-lg font-semibold mb-2">
            Collection Of Usage Information
          </h3>
          <p className="text-gray-600 mb-4">
            In addition to personal data, we collect non-personal information
            about your interactions with our Site. This includes data such as
            your IP address, browser and device type, operating system, and
            other analytical details. We gather this information through cookies
            and system tracking parameters.
          </p>
        </section>

        {/* Usage of Data Section */}
        <section className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Usage Of Your Data
          </h3>
          <p className="text-gray-600 mb-4">
            The personal information you provide is used to offer and enhance
            our services. This includes responding to your inquiries, keeping
            you updated about our services, and improving the overall
            functionality and quality of our site.
          </p>
        </section>

        {/* Marketing Communications Section */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Marketing Communications
          </h2>
          <p className="text-gray-600 mb-4">
            With your consent, we may use your contact details to send you
            marketing materials, newsletters, and other related communications.
            You can opt out of these communications at any time by following the
            instructions included in the communications or contacting us
            directly.
          </p>
        </section>

        {/* Data Protection Section */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Data Protection Measures
          </h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to
            safeguard your personal data from unauthorized access, disclosure,
            alteration, or destruction. However, we acknowledge that no internet
            transmission or electronic storage method is 100% secure, and we
            cannot guarantee absolute protection of your data.
          </p>
        </section>

        {/* Updates Section */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Updates To The Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will go
            into effect as soon as they are posted on our website. We encourage
            you to review this page regularly to stay informed of any changes.
          </p>
        </section>
      </div>
    </div>
  );
}
