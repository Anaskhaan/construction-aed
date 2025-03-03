import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    number: "",
    message: "",
    file: null,
    levelType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sqhpvpek");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/drirmbeo0/upload",
        formData
      );

      setFormData({ ...formData, file: response.data.secure_url });
      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error("File upload error:", error);
      toast.error("Failed to upload file.");
    }
  };

  const handleLevelChange = (e) => {
    setFormData({ ...formData, levelType: e.target.value });
    console.log("Selected Level Type:", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      toast.error("Please upload a file!");
      return;
    }

    if (!formData.levelType) {
      toast.error("Please select a level type!");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:5000/api/form/sendform", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        companyName: "",
        email: "",
        number: "",
        message: "",
        file: null,
        levelType: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded my-24">
        <Toaster />
        <h2 className=" text-4xl tracking-wider  font-bold text-center mb-6">
          Get Estimate Within{" "}
          <span className="text-[#0163BE]">24/48 Hours</span>
        </h2>
        <p className="text-center text-lg text-[#565656] mb-6">
          Have questions? Need a quote? Or just want to discuss your upcoming
          project? Get in touch with us! Our team is ready and eager to assist
          you every step of the way.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h1 className="text-[#2F2F2F] tracking-wider font-bold flex items-center justify-center text-3xl">
              Get In Touch
            </h1>
            <p className=" text-[#565656] flex items-center justify-center mt-2 tracking-wider">
              Fill the below form to resolve any queries or to ask for
              estimation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="mb-2 mt-4 text-[#2F2F2F] font-medium">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="mb-2 mt-4 text-[#2F2F2F] font-medium">
                Your Company
              </span>
              <input
                type="text"
                name="companyName"
                placeholder="Your Company"
                value={formData.companyName}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="mb-2 mt-4 text-[#2F2F2F] font-medium">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="mb-2 mt-4 text-[#2F2F2F] font-medium">
                Phone Number
              </span>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="mb-2 mt-4 text-[#2F2F2F] font-medium">
                Upload Your File Here
              </span>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="mb-2 mt-4 text-[#2F2F2F] font-medium">
                What Level Type Do You Need?
              </span>
              <select
                name="levelType"
                value={formData.levelType}
                onChange={handleLevelChange}
                required
                className="border p-3 rounded-lg w-full"
              >
                <option value="" disabled>
                  Select Level Type
                </option>
                <option value="basic">
                  Level 1 Basic Takeoff (Over All SQ FT/LF & Material
                  Description)
                </option>
                <option value="advanced">
                  Level 2 PLUS (Piece Counts & Assembly Detailed Breakdown) with
                  Condensed Material List for Purchasing
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 mt-4 text-[#2F2F2F] font-medium">
              Message
            </span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full h-24"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#0163BE] w-32 rounded-3xl flex items-center justify-center text-white px-6 py-2 hover:scale-110 duration-300 ease-in-out"
            >
              Submit
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
