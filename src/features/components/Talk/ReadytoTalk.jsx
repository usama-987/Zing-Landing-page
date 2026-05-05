import { useState } from "react";
import HeroImage from "../../../assets/Marketing/Hero1.png";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const ReadytoTalk = () => {
  const { ref, visible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          id="contact"
          ref={ref}
          className={`rounded-2xl overflow-hidden bg-cover bg-center flex flex-col items-center justify-center py-12 px-4 pre-animate${
            visible ? " animate-slide-in-left" : ""
          }`}
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "100% 100%",
            minHeight: "360px",
          }}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#FFFFFF] text-center mb-8">
            Ready to Scale? Let's Talk.
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg flex flex-col gap-3"
          >
            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-2.5 rounded-md bg-white text-sm text-gray-700 outline-none placeholder-gray-400"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full px-4 py-2.5 rounded-md bg-white text-sm text-gray-700 outline-none placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
              className="w-full px-4 py-2.5 rounded-md bg-white text-sm text-gray-700 outline-none placeholder-gray-400"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your Message..."
              required
              className="w-full px-4 py-2.5 rounded-md bg-white text-sm text-gray-700 outline-none placeholder-gray-400 resize-none"
            />

            {/* Button — centered */}
            <div className="flex justify-center mt-1">
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-2.5 rounded-md text-white text-sm font-normal uppercase tracking-widest transition-opacity duration-200"
                style={{
                  backgroundColor: "#2862E3",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Submitting..." : "Get Started"}
              </button>
            </div>

            {success && (
              <p className="text-green-400 text-sm text-center mt-1">
                ✅ Your message has been sent!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReadytoTalk;