import { Link } from "react-router-dom";

import { Mail, Phone, MapPin, Facebook, Apple, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full  bg-[#131313] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="flex items-center space-x-2">
                <img
                  src="Main-logo.webp"
                  alt="BidWorks Estimating Logo"
                  width={75}
                  height={73}
                  className="mb-6"
                />
                <div>
                  <h1 className="text-lg font-bold text-white">BidWorks</h1>
                  <span className="text-md text-gray-400">Estimating</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300 w-80 mx-auto sm:mx-0">
              BidWorks Estimating is a dedicated team of 300 seasoned
              professionals specializing in construction cost estimation. Our
              experts include highly skilled quantity surveyors and estimators
              who are committed to supporting clients through every phase of
              their construction projects.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link
                href="#"
                className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
              >
                <Facebook className="w-5 h-5 text-[#0066FF]" />
              </Link>
              <Link
                href="#"
                className="bg-white rounded-sm  p-2 hover:bg-gray-100 shadow"
              >
                <Linkedin className="w-5 h-5 text-[#0066FF]" />
              </Link>
              <Link
                href="#"
                className="bg-white rounded-full p-2 hover:bg-gray-100 shadow"
              >
                <Apple className="w-5 h-5 text-[#0066FF]" />
              </Link>
            </div>
          </div>

          <div className="space-y-6 ml-16">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="flex font-semibold flex-col space-y-3">
              <Link href="#" className="text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Services
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Trades
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Detail</h3>
            <p className="text-gray-300">
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
                  <Phone className="w-5 h-5   text-[#0066FF]" />
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
      <div className="mt-10 bg-[#0163BE] border-t border-gray-800">
        <div className="max-w-[1440px] h-[53px] mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white text-center sm:text-left">
            Copyright © SICHERES-HAUS.AT. All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-8">
            <a href="#" className="text-white underline">
              Website Policies
            </a>
            <a href="#" className="text-white underline">
              Privacy Policies
            </a>
            <a href="#" className="text-white underline">
              Cookies Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
