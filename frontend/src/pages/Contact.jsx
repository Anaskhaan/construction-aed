import {
  ArrowRight,
  Clock,
  House,
  Link,
  Mail,
  MoveRight,
  Phone,
} from "lucide-react";
export default function Contact() {
  return (
    <div>
      <div className="w-full h-48 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Image */}
        <img
          src="/man-checking-his-phone-job.webp"
          alt="man checking his phone job"
          className="w-full h-full object-cover"
        />

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4">
          <h1 className="lg:text-5xl text-3xl font-bold">Contact Us</h1>
          <span className="text-lg flex justify-center items-center gap-4">
            Home <MoveRight />
            Contact Us
          </span>
        </div>
      </div>

      <div className="container flex justify-center items-center flex-col mx-auto py-10 space-y-4">
        <h1 className="text-5xl font-bold text-center">
          We’d Love to Hear <span className="text-[#0163BE]">From You!</span>
        </h1>
        <p className="text-lg text-center w-[80%]">
          Have questions? Need a quote? Or just want to discuss your upcoming
          project? Get in touch with us! Our team is ready and eager to assist
          you every step of the way.
        </p>
      </div>

      <div className="pb-10">
        <div className="bg-[#F2F9FF] rounded-lg shadow-lg max-w-6xl mx-auto flex flex-col lg:flex-row p-6">
          {/* Contact Form Section */}
          <div className="relative flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Kane Williamson"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Enter Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="kane789@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="489543-67897"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28"
                ></textarea>
              </div>

// <<<<<<< anas
//               {/* Submit Button */}
//               <div className="flex justify-center">
//                 {" "}
//                 <button
//                   type="submit"
//                   className="bg-[#0056D2] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 "
// =======
              {/* Submit Button (Fixed for Mobile) */}
              <div className="flex justify-center lg:absolute lg:bottom-14 lg:right-64">
                <button
                  type="submit"
                  className="bg-[#0056D2] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 w-full lg:w-auto"

                >
                  Submit <ArrowRight />
                </button>
              </div>
            </form>
          </div>

          {/* Map and Contact Details Section */}
          <div className="flex-1 flex flex-col gap-6 mt-6 lg:mt-0">
            {/* Map */}
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.33650017435!2d-77.17048072551108!3d38.75598537175459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7ad14ce2bd5bf%3A0xfe3747bcc030f938!2s7443%20Foxleigh%20Way%2C%20Alexandria%2C%20VA%2022315%2C%20USA!5e0!3m2!1sen!2s!4v1737540801780!5m2!1sen!2s"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="p-6 relative">
              <ul className="space-y-4 text-[#333]">
                <li className="flex items-center gap-4">
                  <House />
                  7443 FOXLEIGH WAY ALEXANDRIA, VA 22315
                </li>
                <li className="flex items-center gap-4">
                  <Phone />
                  571-384-4490
                </li>
                <li className="flex items-center gap-4">
                  <Mail />
                  info@swifttakeoffs.com
                </li>
                <li className="flex items-center gap-4">
                  <Clock />
                  Monday To Friday 8:00 AM To 10:00 PM
                </li>
              </ul>
              <div className="absolute top-16 right-8 h-32 w-32 ">

                <img
                  src="/logo.webp"
                  height={200}
                  width={200}
                  alt="logo image"
                  className="w-full h-full opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
