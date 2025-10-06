import { Mail, Phone, Globe, MapPin, Facebook, Instagram, Twitter, Linkedin, Send, CheckCircle, Youtube } from "lucide-react";
import { useState } from "react";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger mailto
    const mailtoLink = `mailto:easternnagabangalore@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;

    // Show success popup
    setSubmitted(true);

    // Clear form
    setFormData({ name: "", email: "", message: "" });

    // Hide popup after 4s
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-6 sm:px-10 lg:px-20 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4 animate-fadeIn">
          Get in Touch with Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed animate-fadeIn delay-200">
          We’d be delighted to hear from you. Whether you have a question,
          feedback, or simply wish to connect, our team is here to assist you
          with warmth and respect.
        </p>
      </div>

   {/* Contact Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
  {/* Email Card */}
  <div className="bg-white p-8 rounded-2xl shadow-md text-center transform hover:scale-105 transition duration-300">
    <Mail className="w-10 h-10 text-indigo-600 mx-auto mb-4 animate-bounce" />
    <h2 className="text-xl font-semibold text-gray-800">Email Us</h2>
    <p className="text-gray-600 mt-2">We’ll respond as soon as possible.</p>
    <a
      href="mailto:easternnagabangalore@gmail.com"
      className="block mt-3 text-indigo-600 font-medium hover:underline"
    >
      easternnagabangalore@gmail.com
    </a>
  </div>

  {/* Call Card */}
  <div className="bg-white p-8 rounded-2xl shadow-md text-center transform hover:scale-105 transition duration-300">
    <Phone className="w-10 h-10 text-indigo-600 mx-auto mb-4 animate-bounce" />
    <h2 className="text-xl font-semibold text-gray-800">Call Us</h2>
    <p className="text-gray-600 mt-2">We’d be happy to assist you.</p>
    <a
      href="tel:+918310532954"
      className="block mt-3 text-indigo-600 font-medium hover:underline"
    >
      +91 83105 32954
    </a>
  </div>

  {/* Non-Eastern Naga Card */}
  <div className="bg-white p-8 rounded-2xl shadow-md text-center transform hover:scale-105 transition duration-300">
    <Globe className="w-10 h-10 text-indigo-600 mx-auto mb-4 animate-bounce" />
    <h2 className="text-xl font-semibold text-gray-800">Non-Eastern Naga?</h2>
    <p className="text-gray-600 mt-2">Connect with NSUB</p>
    <a
      href="https://nsub.org.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-3 text-indigo-600 font-medium hover:underline"
    >
      www.nsub.org.in
    </a>
  </div>
</div>


      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-16 bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 relative">
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-xl font-medium shadow-md hover:bg-blue-900 transition transform hover:scale-105"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>

        {/* Success Popup */}
        {submitted && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 rounded-2xl shadow-lg animate-fadeIn">
            <div className="text-center p-6">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3 animate-bounce" />
              <h3 className="text-xl font-semibold text-gray-800">Thank You!</h3>
              <p className="text-gray-600 mt-2">Your message has been sent successfully. We’ll get back to you soon.</p>
            </div>
          </div>
        )}
      </div>

      {/* Social Media */}
      <div className="text-center mt-16">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Connect with us on Social Media
        </h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/easternnagalandstudentsunion?mibextid=wwXIfr&rdid=kids3Q7X9NNCSmMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16XrSVKTu2%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noreferrer" className="hover:scale-125 transition transform">
            <Facebook className="w-7 h-7 text-blue-700 hover:text-blue-900" />
          </a>
          <a href="https://www.instagram.com/easternnagalandstudentsunion?igsh=NTVrcDBuemRkbnJr&utm_source=qr" target="_blank" rel="noreferrer" className="hover:scale-125 transition transform">
            <Instagram className="w-7 h-7 text-pink-600 hover:text-pink-800" />
          </a>
          <a href="https://www.youtube.com/@ensub7730" target="_blank" rel="noreferrer" className="hover:scale-125 transition transform">
            <Youtube className="w-7 h-7 text-sky-500 hover:text-sky-700" />
          </a>
        
        </div>
      </div>
    </div>
  );
}
