import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Apple,
  Linkedin,
  Instagram,
} from "lucide-react";

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
                  src="logofooter.webp "
                  alt="Swift Takeoffs Logo"
                  width={75}
                  height={73}
                  className="mb-6 w-20 h-auto"
                />
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-[320px]">
              Swift Takeoffs is a dedicated team of 50 seasoned professionals
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
                className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
              >
                <Instagram className="w-5 h-5 text-[#0066FF]" />
              </Link>
              <Link
                to="#"
                className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
              >
                <Linkedin className="w-5 h-5 text-[#0066FF]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold">Quick Links</h3>

          
             
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

          {/* Contact Details */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold">Contact Details</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <Mail className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-gray-300">info@swifttakeoffs.com</span>
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
                  8 The Green #6092
                  <br />
                  Dover, DE, 19901
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
          <div className="lg:flex gap-x-3 hidden items-start ml-4 justify-start ">
            <Link to="/terms" className="text-white underline">
              Website Policies
            </Link>
            <Link to="/privacypolicy" className="text-white underline">
              Privacy Policies
            </Link>
         
          </div>
        </div>
      </div>
    </footer>
  );
}
