import { ArrowRight } from "lucide-react";

export default function Terms() {
  return (
    <div>
      <div className="relative w-full h-60">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/construction-site.webp')] bg-cover bg-center bg-no-repeat"></div>
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Heading */}
        <h1 className="absolute top-1/3 w-full text-center text-white text-4xl font-bold z-10">
          Terms and Conditions
        </h1>
        {/* Breadcrumb Links */}
        <div className="absolute top-32 w-full flex justify-center items-center text-sm text-white z-10">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <span className="mx-2">
            <ArrowRight />
          </span>
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-20 px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold mb-4">
            Welcome to Bid Works Estimating,LLC
          </h1>
          <p className="text-gray-600 mb-4">
            These terms and conditions outline the rules and regulations for the
            use of Bid Works Estimating Website. Bid Works Estimating is located
            at: Questions or Concerns? Contact:
            <a
              href="Info@bidworksestimating.com"
              className="text-blue-600 hover:underline"
            >
              Info@bidworksestimating.com
            </a>
            .
            <br />
            By accessing this website, we assume you accept these terms and
            conditions in full. Do not continue to use the Bid Works Estimating
            website if you do not accept all of the terms and conditions stated
            on this page.
          </p>
        </div>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Terminology</h2>
          <p className="text-gray-700 mb-4">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement, and Disclaimer Notice and any or all Agreements:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              &quotClient&quot, &quotYou&quot and &quotYour&quot refers to you,
              the person accessing this website and accepting the Company&quots
              terms and conditions.
            </li>
            <li>
              &quotThe Company&quot, &quotOurselves&quot, &quotWe&quot,
              &quotOur&quot and &quotUs&quot refers to our Company.
            </li>
            <li>
              &quotParty&quot, &quotParties&quot, or&quotUs&quot refers to both
              the Client and ourselves, or either the Client or ourselves.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            All terms refer to the offer, acceptance, and consideration of
            payment necessary to undertake the process of our assistance to the
            Client in the most appropriate manner, in accordance with and
            subject to the prevailing law of the United States.
          </p>
        </section>

        {/* License Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">License</h2>
          <p className="text-gray-700 mb-4">
            You may view or print pages from{" "}
            <a
              href="https://www.bidworksestimating.com"
              className="text-blue-600 hover:underline"
            >
              https://www.bidworksestimating.com
            </a>{" "}
            for your own personal use subject to restrictions set in these terms
            and conditions. You must not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Republish material from https://www.bidworksestimating.com</li>
            <li>
              Sell, rent, or sub-license material from
              https://www.bidworksestimating.com
            </li>
            <li>
              Reproduce, duplicate, or copy material from
              https://www.bidworksestimating.com
            </li>
            <li>
              Redistribute content from Bid Works Estimating (unless content is
              specifically made for redistribution)
            </li>
          </ul>
        </section>

        {/* User Comments Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">User Comments</h2>
          <p className="text-gray-700 mb-4">
            This Agreement shall begin on the date hereof.
          </p>
          <p className="text-gray-700 mb-4">
            Certain parts of this website offer the opportunity for users to
            post and exchange opinions, information, material, and comments
            (&quot Comments &quot). Bid Works Estimating does not screen, edit,
            publish, or review Comments prior to their appearance on the
            website, and Comments do not reflect the views or opinions of Bid
            Works Estimating, its agents, or affiliates.
          </p>
          <p className="text-gray-700 mb-4">
            Comments reflect the view and opinion of the person who posts such a
            view or opinion. To the extent permitted by applicable laws, Bid
            Works Estimating shall not be responsible or liable for the Comments
            or for any loss, cost, liability, damages, or expenses caused and or
            suffered as a result of any use of and/or posting of and/or
            appearance of the Comments on this website.
          </p>
          <p className="text-gray-700 mb-4">
            Bid Works Estimating reserves the right to monitor all Comments and
            to remove any Comments which it considers in its absolute discretion
            to be inappropriate, offensive, or otherwise in breach of these
            Terms and Conditions.
          </p>
          <p className="text-gray-700 mb-4">You warrant and represent that:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent, or trademark, or
              other proprietary right of any third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent, or otherwise unlawful material or material which is an
              invasion of privacy;
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>
          <p className="text-gray-700">
            You hereby grant to Bid Works Estimating a non-exclusive
            royalty-free license to use, reproduce, edit, and authorize others
            to use, reproduce, and edit any of your Comments in any and all
            forms, formats, or media.
          </p>
          <div className="pt-10">
            <h2 className="text-xl font-semibold mb-6">
              Hyperlinking To Our Content
            </h2>

            {/* Initial Policy Statement */}
            <p className="text-gray-700 mb-6">
              The following organizations may link to our website without prior
              written approval:
            </p>

            {/* First List */}
            <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>
                Online directory distributors when they list us in the directory
                may link to our website in the same manner as they hyperlink to
                the websites of other listed businesses
              </li>
              <li>
                System-wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our website
              </li>
            </ul>

            {/* Middle Paragraphs */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-700">
                These organizations may link to our home page, to publications,
                or to other website information so long as the link: (a) is not
                in any way misleading; (b) does not falsely imply sponsorship,
                endorsement, or approval of the linking party and its products
                or services; and (c) fits within the context of the linking
                party&apos;site.
              </p>

              <p className="text-gray-700">
                We may consider and approve in our sole discretion other link
                requests from the following types of organizations:
              </p>
            </div>

            {/* Second List */}
            <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
              <li>
                commonly-known consumer and/or business information sources such
                as Chambers of Commerce, American
              </li>
              <li>Automobile Association, AARP, and Consumers Union;</li>
              <li>dot.com community sites;</li>
              <li>
                associations or other groups representing charities, including
                charity giving sites;
              </li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>
                accounting, law, and consulting firms whose primary clients are
                businesses; and
              </li>
              <li>educational institutions and trade associations.</li>
            </ul>

            {/* Final Paragraphs */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-700">
                We will approve link requests from these organizations if we
                determine that: (a) the link would not reflect unfavorably on us
                or our accredited businesses; (b) the organization does not have
                an unsatisfactory record with us; (c) the benefit to us from the
                visibility associated with the hyperlink outweighs the absence
                of; and (d) where the link is in the context of general resource
                information or is otherwise consistent with editorial content in
                a newsletter or similar product furthering the mission of the
                organization.
              </p>

              <p className="text-gray-700">
                These organizations may link to our home page, to publications,
                or to other website information so long as the link: (a) is not
                in any way misleading; (b) does not falsely imply sponsorship,
                endorsement, or approval of the linking party and its products
                or services; and (c) fits within the context of the linking
                party&aposs site.
              </p>
            </div>

            {/* Final List */}
            <p className="text-gray-700 mb-4">
              Approved organizations may hyperlink to our website as follows:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>By use of our corporate name; or</li>
              <li>
                By use of the uniform resource locator (Web address) being
                linked to; or
              </li>
              <li>
                By use of any other description of our website or material being
                linked to that makes sense within the context and format of
                content on the linking party&aposs site.
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">iframes</h2>
          <p className="text-gray-700 mb-4">
            Without prior approval and express written permission, you may not
            create frames around our webpages or use other techniques that alter
            in any way the visual presentation or appearance of our website.
          </p>
        </section>

        {/* Reservation of Rights */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Reservation of Rights</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right at any time and in its sole discretion to
            request that you remove all links or any particular link to our
            website. You agree to immediately remove all links to our website
            upon such request. We also reserve the right to amend these terms
            and conditions and its linking policy at any time. By continuing to
            link to our website, you agree to be bound by and abide by these
            linking terms and conditions.
          </p>
        </section>

        {/* Removal of Links */}
        <section className="mb-8">
          <p className="text-gray-700 mb-4">
            If you find any link on our website or any linked website
            objectionable for any reason, you may contact us about this. We will
            consider requests to remove links but will have no obligation to do
            so or to respond directly to you.
          </p>
          <p className="text-gray-700 mb-4">
            Whilst we endeavour to ensure that the information on this website
            is correct, we do not warrant its completeness or accuracy; nor do
            we commit to ensuring that the website remains available or that the
            material on the website is kept up to date.
          </p>
        </section>

        {/* Content Liability */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Content Liability</h2>
          <p className="text-gray-700 mb-4">
            We shall have no responsibility or liability for any content
            appearing on your website. You agree to indemnify and defend us
            against all claims arising out of or based upon your website. No
            link(s) may appear on any page on your website or within any context
            containing content or materials that may be interpreted as libelous,
            obscene or criminal, or which infringes, otherwise violates, or
            advocates the infringement or other violation of any third party
            rights.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties, and conditions relating to our website
            and the use of this website (including, without limitation, any
            warranties implied by law in respect of satisfactory quality,
            fitness for purpose and/or the use of reasonable care and skill).
            Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              Limit or exclude our or your liability for death or personal
              injury resulting from negligence;
            </li>
            <li>
              Limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              Limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              Exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            The limitations and exclusions of liability set out in this section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer or in relation to the subject matter of this disclaimer,
            including liabilities arising in contract, in tort (including
            negligence) and for breach of statutory duty.
          </p>
          <p className="text-gray-700">
            To the extent that the website and the information and services on
            the website are provided free of charge, we will not be liable for
            any loss or damage of any nature.
          </p>
        </section>
        <section className="mb-8">
          <h1 className="text-xl font-semibold mb-4">
            Bid Works Estimating Terms & Conditions:
          </h1>
          <p className="text-gray-700 mb-2">
            Please Read Important Terms When You Place An Order
          </p>
          <p className="text-gray-700 mb-4">
            When you accept our estimate and/or pay for your order, you agree to
            our terms of service below:
          </p>
        </section>

        {/* Cost of Service Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Cost Of Service:</h2>
          <p className="text-gray-700 mb-4">
            The cost of the service depends on the size of your project,
            specification involved, and time constraints. However, you can
            expect a flat rate provided by providing us with the fulfilled
            highlights of the requirements. If there are any obstacles are
            subject to change.
          </p>
        </section>

        {/* Payment Terms Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Payment Terms & Policy:
          </h2>
          <p className="text-gray-700 mb-4">
            Payment must be made and settled before we can proceed with the
            work. Please note any payment received after 2 pm EST will be
            treated the next day. If you have ongoing projects or committed
            jobs, you can request to have extended credit to pay your invoice.
          </p>
        </section>

        {/* Client Requirements Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Client Requirements:</h2>
          <p className="text-gray-700 mb-4">
            For proper estimating we must also have plans, charts must provide
            us with complete information such as drawings, specifications,
            addendum, and required format Omitting important pieces of your
            requirements will increase our take- off time and pricing.
          </p>
        </section>

        {/* Disclaimer Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Disclaimer On Take-Off Results:
          </h2>
          <p className="text-gray-700 mb-4">
            Our take-offs and quantity surveys are only a 2-step quality control
            process on all take-off results. Circumstances beyond our control
            such as scale discrepancies, missing specs, human errors, or
            incomplete sets of Blueprints can (but seldom do) cause omissions,
            errors and/or oversights to Materially detract at take-off results
            before going them to our bidding staff. Please review all results.
          </p>
          <p className="text-gray-700 mb-4">
            We are not responsible for errors caused by poor quality or
            incomplete drawings, specifications, addendum or Missing set of
            items provided at the time of order. Should updated versions of the
            plans be submitted after delivery or during the time of process,
            additional cost may apply based on our discretion, if you have any
            alterations of requirements. Our customer Service will quote you
            with revised delivery dates and additional charges. Unforeseen
            circumstances such as government requirements and material costs may
            vary.
          </p>
        </section>

        {/* Due Dates Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Due Dates:</h2>
          <p className="text-gray-700 mb-4">
            It is very important for us to meet the agreed due date. However,
            sometimes it is hard to determine how much time the team will
            actually take once we are working on it. If you have a specific date
            you must meet, please specify it at the time of placing an order.
            Should we be unable to complete the project in time, we will make
            sure to communicate with you and your dispatcher, and you can also
            contact Supervisor to find out the status of your order.
          </p>
          <p className="text-gray-700 mb-4">
            There are no overnight services after 2 pm EST. (The overnight time
            limit is 2 pm) We do not take offs through the Weekends. For urgent
            requirements and want us to do weekend shifts, Additional cost may
            be incurred and can&apost be paid on business day.
          </p>
        </section>

        {/* Refund Policy Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Refund Policy:</h2>
          <p className="text-gray-700 mb-4">
            If you are not happy with the results of your take-off&apos;s please
            contact us and we offer unlimited revisions within in accordance of
            scope and work and within ten business days of your revision. We
            turn after the refund option until You have opened the file and
            verified the scope of work. We are working to make sure we can
            provide the best service possible, and we hope that we will correct
            it. Once it&aposs all set to call. We simply respond to any concerns
            made on support tickets, via emails, or phone calls. By accepting
            your estimate you agree to our service and you also acknowledge the
            terms of service of refunds. If for any reason you are not satisfied
            with our services. We reserve the right to issue or deny the refund.
            For technical assistance or email us all service and revision
            inquiries at{" "}
            <a
              href="mailto:info@bidworksestimating.com"
              className="text-blue-600 hover:underline"
            >
              info@bidworksestimating.com
            </a>{" "}
            we monitor this address constantly.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Assumption Policy:</h2>
          <p className="text-gray-700 mb-4">
            The Cost estimate take-off estimates will be based on the plans
            provided. We don&apost make to include any quantities we do not do
            shop engineering. The information in your results will be found
            solely on the plans/schedules provided at the time of ordering. As
            we may make some assumptions where needed at our discretion, but we
            will note the importance of these assumptions.
          </p>
        </section>

        {/* Cost Estimation Policy Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Cost Estimating Policy And Explanation:
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Option 1:</span> Labor Man Hours
              Count (No Rate) (Level 1 or 2) unless this rate is provided by the
              customer or on the plans/specs.
            </p>
            <p>
              <span className="font-semibold">Option 2:</span> Cost with Rate or
              Labor and Cost value Average Price cost provided to you at a
              reasonable rate.
            </p>
            <p>
              Please note all estimating pricing will be provided when we send
              you our pricing options after reviewing the plans is decided. You
              will be able to edit these prices, and all the formulas will be
              changed accordingly in the Excel sheet. We merely use Labor Cost
              Average pricing or any items that are not found on online bidding
              software needed to complete a reasonable but competitive cost
              figure. As the job size gets bigger or smaller, or anything
              changes with the job conditions, following the general
              instructions.
            </p>
            <p>
              All prices given may change at the time of your estimating unless
              stated as an option**
            </p>
          </div>
        </section>

        {/* Important Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">**IMPORTANT**</h2>
          <p className="text-gray-700 mb-4">
            This is only an average cost. Please check your cost estimating
            results before using the information.
          </p>
          <p className="text-gray-700 mb-4">
            Due to the current market fluctuation the costs of construction
            materials has increases dramatically.
          </p>
        </section>

        {/* Disclaimer Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Disclaimer On Cost Estimating Results:
          </h2>
          <p className="text-gray-700 mb-4">
            Cost estimated is for example purposes only using control software.
            It will NOT include your specific overhead equipment cost, or custom
            labor pricing, etc. We DO NOT sell manufacturers verify prices and
            you take our procurement services. Please make all necessary custom
            overhead adjustments, as we do not know your company bidding and
            requirements. Our cost pricing is set after depending on your
            company&aposs specific overhead cost factors, requirements, or
            circumstances. If you are using this estimate to bid a project, you
            must make adjustments outside this take-off to reflect your company
            cost Final overhead is available, as you can also make adjustments
            on your company pricing and requirements. The average-market
            materials prices is also based on your overhead and needs. Due to
            the volatile overhead of materials costs, we cannot verify the
            manufacturer&aposs current costs. Current market overhead cost can
            vary from our standard estimating costs you use it. You can email us
            at{" "}
            <a
              href="mailto:info@bidworksestimating.com"
              className="text-blue-600 hover:underline"
            >
              info@bidworksestimating.com
            </a>{" "}
            if you have any revision requests or questions.
          </p>
        </section>

        {/* Additional Terms Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Additional Terms About Our Services:
          </h2>
          <p className="text-gray-700">
            We strive to be as accurate as possible on all works performed for
            our customers. However, please make sure to complete your own
            quality control and review to ensure it meets your expectations. Due
            to job conditions and area variables, your final quantities and
            material costs may vary.
          </p>
        </section>
      </div>
    </div>
  );
}
