"use client";

import { useState } from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation function
  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({ ...errors, [e.target.id]: "" }); // clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setStatus("❌ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main">
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container">
          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Address */}
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 shadow rounded-lg text-center">
              <MdLocationOn className="text-3xl text-primary mb-3" />
              <h3 className="text-lg font-bold text-black dark:text-white">Address</h3>
              <p className="text-body-color dark:text-gray-300">
                116 Valley Way Rydale Ridge, Harare
              </p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 shadow rounded-lg text-center">
              <MdEmail className="text-3xl text-primary mb-3" />
              <h3 className="text-lg font-bold text-black dark:text-white">Email Us</h3>
              <p className="text-body-color dark:text-gray-300">
                bbconstruction2012@gmail.com
              </p>
            </div>
            {/* Phones */}
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 shadow rounded-lg text-center">
              <MdPhone className="text-3xl text-primary mb-3" />
              <h3 className="text-lg font-bold text-black dark:text-white">Call Us</h3>
              <ul className="text-body-color dark:text-gray-300 space-y-1">
                <li>+263 77 2204 206</li>
                <li>+263 712 725 539</li>
                <li>+263 773 050 593</li>
                <li>+263 773 048 825</li>
                <li>+263 718 869 643</li>
                <li>+263 713 259 279</li>
              </ul>
            </div>
          </div>

          {/* Contact Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Maps */}
            <div className="h-[450px] w-full overflow-hidden rounded-lg shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6376.662399224673!2d30.870358946606714!3d-17.85385852161099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19310926a1f753a3%3A0x98ad7ca83d6c94b0!2sBB%20Construction%20and%20civil%20engineering!5e0!3m2!1sen!2szw!4v1747721203085!5m2!1sen!2szw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark dark:text-white mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className={`w-full rounded border ${
                      errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-gray-50 dark:bg-gray-700 px-4 py-3 text-sm text-body-color dark:text-gray-200 focus:border-primary focus:ring-primary`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark dark:text-white mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className={`w-full rounded border ${
                      errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-gray-50 dark:bg-gray-700 px-4 py-3 text-sm text-body-color dark:text-gray-200 focus:border-primary focus:ring-primary`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-dark dark:text-white mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject"
                    className={`w-full rounded border ${
                      errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-gray-50 dark:bg-gray-700 px-4 py-3 text-sm text-body-color dark:text-gray-200 focus:border-primary focus:ring-primary`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark dark:text-white mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                    className={`w-full rounded border ${
                      errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-gray-50 dark:bg-gray-700 px-4 py-3 text-sm text-body-color dark:text-gray-200 focus:border-primary focus:ring-primary`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`${
                      loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-blue-700"
                    } text-white font-medium px-8 py-3 rounded-lg transition`}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>

              {status && (
                <p className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
