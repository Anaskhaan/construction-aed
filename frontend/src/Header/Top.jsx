import { Mail, Phone } from "lucide-react";

const Top = () => {
  return (
    <div>
      <div className="bg-[#0163BE] hidden lg:block pr-12 pl-12">
        <div className=" flex items-center justify-between">
          <div className="flex p-2 text-white items-center justify-center">
            <span className=" flex items-center mr-2 justify-center">
              <Phone className=" size-4 mr-2" />
              <p>571-384-4490 | </p>
            </span>
            <span className=" flex items-center mr-2 justify-center">
              <Mail className=" size-4 mr-2" />
              <p>info@bidworksestimating.com</p>
            </span>
          </div>

          {/* second div */}

          <div className=" flex space-x-2 items-center justify-center text-white">
            <p>Follow Us |</p>
            <img src="/facebook-circle-fill.webp" alt=" facebook-icon" />
            <img src="/instagram-fill.webp" alt=" instagram-icon" />
            <img src="/linkedin-box-fill.webp" alt="linkedIn-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
