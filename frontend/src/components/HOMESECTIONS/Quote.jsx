import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight, Upload } from "lucide-react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    number: "",
    message: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      toast.error("Please upload a file!");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Your data is being sent. This may take a while...");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("companyName", formData.companyName);
    data.append("email", formData.email);
    data.append("number", formData.number);
    data.append("message", formData.message);
    data.append("file", formData.file);

    try {
      await axios.post("http://localhost:5000/api/form/sendform", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.dismiss();
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        companyName: "",
        email: "",
        number: "",
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.dismiss();
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="GetQuote" className="w-auto mx-auto lg:py-6 bg-white">
      <Toaster />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2  items-center">
        <div className="p-6 lg:ml-5 -ml-2">
          <h2 className="lg:text-5xl text-xl tracking-wider font-bold">
            Get A <span className="text-[#0163BE]">Free Quote</span> Now
          </h2>
          <p className="lg:text-lg text-sm text-[#565656] mb-6 lg:mt-0 ">
            Ready to take your projects to the next level? Request a free quote
            today and let our expert estimators deliver reliability you can
            trust!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <div className="flex items-center space-x-3">
                <input
                  type="file"
                  name="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-[#0163BE] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition duration-300"
                >
                  <Upload className="w-5 h-5" />
                  <span>Upload File</span>
                </label>
                {formData.file && (
                  <span className="text-gray-600">{formData.file.name}</span>
                )}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full h-24"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#0163BE] w-full md:w-auto px-6 py-2 rounded-3xl flex items-center justify-center text-white hover:scale-105 duration-300 ease-in-out ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Now"}
              {!isSubmitting && <ArrowRight className="ml-2" />}
            </button>
          </form>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            src="/builder.svg"
            alt="Construction Worker"
            className="relative z-10 w-[100%] object-contain -mb-5 lg:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
