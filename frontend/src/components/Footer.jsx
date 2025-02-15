import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Apple, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6 text-left">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <img
                  src="Main-logo.webp"
                  alt="Swift Takeoffs Logo"
                  width={75}
                  height={73}
                  className="mb-6"
                />
                <div>
                  <h1 className="text-lg font-bold text-white">Swift</h1>
                  <span className="text-md text-gray-400">Takeoffs</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-[320px]">
              Swift Takeoffs is a dedicated team of 300 seasoned professionals
              specializing in construction cost estimation. Our experts include
              highly skilled quantity surveyors and estimators who are committed
              to supporting clients through every phase of their construction
              projects.
            </p>
            <div className="flex justify-start space-x-4">
              <Link
                to="#"
                className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
              >
                <Facebook className="w-5 h-5 text-[#0066FF]" />
              </Link>
              <Link
                to="#"
                className="bg-white rounded-sm p-2 hover:bg-gray-100 shadow"
              >
                <Linkedin className="w-5 h-5 text-[#0066FF]" />
              </Link>
              <Link
                to="#"
                className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
              >
                <Apple className="w-5 h-5 text-[#0066FF]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold">Quick Links</h3>

            <div className=" flex flex-row-reverse justify-between">
              <div>
                <div className=" lg:hidden flex flex-col items-center justify-center space-y-10 space-x-8 mt-3 sm:mt-0">
                  <Link to="/terms" className="text-white -mr-4 underline">
                    Website Policies
                  </Link>
                  <Link to="/privacypolicy" className="text-white underline">
                    Privacy Policies
                  </Link>
                  <Link to="#" className="text-white underline">
                    Cookies Policies
                  </Link>
                </div>
              </div>
              <nav className="flex font-semibold flex-col space-y-3">
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>

                <Link to="/blogs" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold">Contact Detail</h3>
            <p className="text-gray-300 max-w-[320px]">
              Lorem Ipsum Dolor Sit Amet Consectetur, Parturient Aliquam Ipsum
              Etiam Eget.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <Mail className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-gray-300">Carrie.on91@Yahoo.Com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <Phone className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-gray-300">878.501.4074 X312</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <MapPin className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-gray-300">
                  City Town Near Cardsfre Austdert
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 bg-[#0163BE] border-t border-gray-800">
        <div className="max-w-[1440px] h-[53px] mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-sm text-white">
            Copyright © SICHERES-HAUS.AT. All Rights Reserved
          </p>
          <div className="lg:flex hidden flex-wrap justify-start sm:justify-end space-x-8 mt-3 sm:mt-0">
            <Link to="/terms" className="text-white underline">
              Website Policies
            </Link>
            <Link to="/privacypolicy" className="text-white underline">
              Privacy Policies
            </Link>
            <Link to="#" className="text-white underline">
              Cookies Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
