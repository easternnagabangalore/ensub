import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            We Strive, We Thrive
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mt-4">
            Since 2004 • Unity • Resilience • Progress
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Link
              to="/about"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium shadow-lg transition transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-full text-gray-900 font-medium shadow-lg transition transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* About Preview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ENSUB was founded in 2004 to serve as a home away from home for
            students from Eastern Nagaland in Bengaluru. For two decades, we’ve
            stood for unity, cultural pride, and resilience — supporting our
            members in academics, welfare, and community.
          </p>
          <Link
            to="/about"
            className="px-5 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
          >
            Discover Our Story
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src={heroBg}
            alt="ENSUB Culture"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {[
            { num: "20+", label: "Years of Legacy" },
            { num: "500+", label: "Members Connected" },
            { num: "100+", label: "Events & Initiatives" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform"
            >
              <h3 className="text-4xl font-bold">{item.num}</h3>
              <p className="mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* President’s Welcome Section - Premium & Minimal */}
<section className="bg-gray-50 py-16">
  <div className="max-w-4xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6 tracking-wide">
        A Note from Our President
      </h2>

      {/* Short Preview */}
      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 font-light">
        “Ever since I joined the union, I have been serving our community through media-related work —
        designing banners, flyers, and invitations. We once had a simple website on a free domain,
        but sustaining it financially was a challenge. Over time, we relied on social media to stay connected…”
      </p>

      {/* Read More Button */}
      
        <Link
        to="/about" // link to your About section
        className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 border-b border-indigo-400"
          >
        Read More →
      </Link>
    </motion.div>
  </div>
</section>


      {/* Quick Links Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore ENSUB
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Our Constitution",
              desc: "Read our guiding principles and download the ENSUB constitution.",
              link: "/constitution",
            },
            {
              title: "Officials & Leaders",
              desc: "Meet the dedicated team leading ENSUB forward.",
              link: "/officials",
            },
            {
              title: "Gallery",
              desc: "Explore memories and moments from our community events.",
              link: "/gallery",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <Link
                to={item.link}
                className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
              >
                View More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Be a Part of ENSUB
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join us in celebrating culture, supporting students, and strengthening
          our community in Bengaluru. Together, we thrive.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg transition transform hover:scale-105"
        >
          Get in Touch
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How can I register with ENSUB?",
                a: "You can register by contacting your respective Tribal Representative or reaching out directly to ENSUB executives.",
              },
              {
                q: "What are the benefits of registering?",
                a: "Participation in events, emergency support, and community connection. Membership is valid for one year.",
              },
              {
                q: "Is there a membership fee?",
                a: "Yes. New registration ₹400, renewal ₹300 annually.",
              },
              {
                q: "Is registration mandatory?",
                a: "Yes. Registration ensures smooth coordination, support, and participation.",
              },
              {
                q: "What events does ENSUB organize?",
                a: "Annual Freshers’ Meet, Sports Meet, Seminars, Workshops, Cultural Celebrations.",
              },
              {
                q: "Does ENSUB provide financial assistance?",
                a: "No direct aid, but we coordinate community support during emergencies.",
              },
              {
                q: "How can I contribute or volunteer?",
                a: "By volunteering at events, joining committees, or supporting initiatives.",
              },
              {
                q: "How do I stay updated?",
                a: "Through our website, social media, and WhatsApp groups.",
              },
              {
                q: "Who can become a member?",
                a: "Any Eastern Naga from Chang, Phom, Yimkhiung, Khiamniungan, Konyak, Tikhir, Sangtam & Eastern Sumi tribes in Bangalore.",
              },
              {
                q: "Can non-members attend events?",
                a: "Some cultural events are open, but most benefits are for registered members.",
              },
              {
                q: "What happens if I forget to renew?",
                a: "You may miss updates, but you can renew anytime.",
              },
              {
                q: "How does ENSUB use the membership fee?",
                a: "To cover admin costs, events, and initiatives.",
              },
              {
                q: "How can I reach ENSUB?",
                a: "Via Tribal Representatives or ENSUB executives. Details on website.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center font-medium text-gray-800"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {faq.q}
                  <span className="text-indigo-600 font-bold">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
