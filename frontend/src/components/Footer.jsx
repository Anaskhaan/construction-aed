import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6 text-left">
            <img
              src="logofooter.webp"
              alt="Swift Takeoffs Logo"
              width={75}
              height={73}
              className="mb-6 w-20 h-auto"
            />
            <p className="text-sm text-gray-300 max-w-[320px]">
              Swift Takeoffs is a dedicated team of 50 seasoned professionals
              specializing in construction cost estimation. Our experts include
              highly skilled quantity surveyors and estimators committed to
              supporting clients through every phase of their construction
              projects.
            </p>
            <div className="flex space-x-4">
              <Link to="#" aria-label="Facebook">
                <Facebook className="w-6 h-auto text-white" />
              </Link>
              <Link to="#" aria-label="Instagram">
                <Instagram className="w-6 h-auto text-white" />
              </Link>
              <Link to="#" aria-label="LinkedIn">
                <Linkedin className="w-6 h-auto text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-3 font-semibold">
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
                <Mail className="w-6 h-auto text-white" />
                <a
                  href="mailto:info@swifttakeoffs.com"
                  className="text-gray-300"
                >
                  info@swifttakeoffs.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-auto text-white" />
                <a href="tel:8785014074" className="text-gray-300">
                  878.501.4074 X312
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-auto text-white" />
                <span className="text-gray-300">
                  8 The Green #6092
                  <br />
                  Dover, DE, 19901
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#0163BE] border-t border-gray-800 py-4">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
          <p className="text-xs text-white text-center sm:text-left">
            Copyright © SWIFT TAKEOFFS - All Rights Reserved
          </p>
          <div className="flex gap-x-3 mt-2 sm:mt-0">
            <Link to="/terms" className="text-white text-xs">
              Terms & Conditions
            </Link>
            <Link to="/privacypolicy" className="text-white text-xs">
              Privacy Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
