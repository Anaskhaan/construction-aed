import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Clock, House, Mail, MoveRight, Phone } from "lucide-react";
import { toast } from "react-hot-toast";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Your message was sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

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
        <div className="  max-w-6xl mx-auto flex flex-col lg:flex-row p-6">
          {/* Contact Form Section */}
          <div className="relative flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center   ">
                <button
                  type="submit"
                  className="bg-[#0056D2] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 w-full lg:w-auto"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Submit"} <ArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
