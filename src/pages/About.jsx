import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import David from "../assets/Presidents/David.jpg";
import Apongy from "../assets/Presidents/Apongy.jpg";
import Khangyang from "../assets/Presidents/Khangyang.jpg";
import Rilipong from "../assets/Presidents/RILIPONG.jpg";

// ---------------- PRESIDENT CARD COMPONENT ----------------
function PresidentCard({ name, period, image, message }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-indigo-700 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-4">{period}</p>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {expanded ? message : `${message.substring(0, 300)}...`}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors self-start"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

// ---------------- MAIN COMPONENT ----------------
export default function AboutUs() {
  const milestones = [
    {
      year: "2004",
      title: "ENSUB Established",
      desc: "Founded by Shri. Kyüpise Sangtam with co-founders Mr. Lichoba Sangtam and Mr. Tsalichum Sangtam.",
    },
    {
      year: "2010",
      title: "Growing Network",
      desc: "ENSUB strengthened its member base and organized cultural & welfare programs.",
    },
    {
      year: "2016",
      title: "Expanding Support",
      desc: "Launched academic and personal development initiatives for Eastern Nagaland students.",
    },
    {
      year: "2020",
      title: "Digital Era",
      desc: "Adopted digital platforms to stay connected and provide support during global challenges.",
    },
    {
      year: "Today",
      title: "Unity, Resilience & Progress",
      desc: "Continuing the mission to empower students, celebrate culture, and create opportunities.",
    },
  ];

  const highlights = [
    {
      title: "Rescue & Welfare",
      text: "Supported stranded and distressed students, arranged funerals, hospital care, and emergency rescues.",
    },
    {
      title: "Cultural & Social",
      text: "Organized Freshers’ Meets, cultural festivals, and represented ENSUB during Nagaland Statehood celebrations.",
    },
    {
      title: "Advocacy & Leadership",
      text: "Met ENSF, ENLU, and MLAs to voice concerns and seek support for Eastern Nagas in Bengaluru.",
    },
    {
      title: "Solidarity & Peace",
      text: "Joined peace rallies, collaborated with NSUB and NE organizations to uphold unity and justice.",
    },
    {
      title: "Media & Representation",
      text: "ENSUB President featured on Hornbill TV interview to emphasize the importance of registration, continued engagement with the union, and building a stronger community.",
    },
    {
      title: "Community Service",
      text: "Always present for distress calls — providing send-offs, memorials, and welfare support to members.",
    },
  ];

  // Counter hook
  function useCountUp(target, duration = 2000) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = parseInt(target);
      if (start === end) return;
      let incrementTime = 20;
      let totalIncrements = duration / incrementTime;
      let step = end / totalIncrements;
      let timer = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }, [target, duration]);
    return count;
  }

  return (
    <div className="w-full overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className="relative h-[65vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Eastern Nagaland Students’ Union Bengaluru
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-2xl text-gray-200 mt-4"
          >
            Since 2004 • Unity • Resilience • Progress
          </motion.p>
        </motion.div>
      </div>

      {/* ---------------- COUNTERS ---------------- */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {[
            { num: 20, suffix: "+", label: "Years of Legacy" },
            { num: 1000, suffix: "+", label: "Members Connected" },
            { num: 100, suffix: "+", label: "Events & Initiatives" },
          ].map((item, index) => {
            const count = useCountUp(item.num, 2000);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform"
              >
                <h3 className="text-4xl font-bold">
                  {count}
                  {item.suffix}
                </h3>
                <p className="mt-2 text-lg">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---------------- ABOUT ENSUB ---------------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
            About ENSUB
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-4">
            The Eastern Nagaland Students’ Union Bengaluru (ENSUB) was established in 2004 to serve as a vibrant platform for students from Eastern Nagaland residing in Bengaluru. Founded by Shri. Kyüpise Sangtam with the invaluable support of co-founders Mr. Lichoba Sangtam and Mr. Tsalichum Sangtam, ENSUB emerged with a vision to unite and empower its members while fostering a sense of community and identity.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mb-4">
            Our aims and objectives include promoting the welfare, educational growth, and cultural heritage of Eastern Nagaland students, providing a supportive network for academic and personal development, and strengthening solidarity among members through various initiatives.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Guided by our motto,{" "}
            <span className="font-semibold">"We Strive, We Thrive,"</span> we endeavor to overcome challenges with determination and flourish as a collective body, embodying resilience and success in all that we do.
          </p>
        </motion.div>
      </section>

      {/* ---------------- PRESIDENTS SECTION ---------------- */}
      <section id="about" className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10">
            Note from Our Presidents
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PresidentCard
              name="David Chang"
              period="Current President"
              image={David}
              message={`Ever since I joined the union, I have been serving our community through media-related work—designing banners, flyers, and invitations. We once had a simple website on a free domain, but sustaining it financially was a challenge. Over time, we relied on social media to stay connected.

Just before the pandemic, I envisioned creating a website where our members could register, share queries, and access resources. The dream was delayed by financial constraints, but I continued to learn and prepare. Today, with determination and collective effort, that vision has finally taken shape. Truly, God has His own plan, and this website stands as a testimony.

This platform will grow into more than just a website. It will help our students discover opportunities for higher education, support members in their professional journeys, provide a hub for queries and community updates, and most importantly, keep our roots, culture, and traditions alive.

Together, let us use this website to strengthen our bond as a community.

“We strive, we thrive”

With warm regards,
David Chang
President`}
            />

            <PresidentCard
              name="C. Khangyang Chang"
              period="President (2007–2009)"
              image={Khangyang}
              message={`Warm greetings to everyone!

As I take a moment to reflect on my time as the 3rd President of the Eastern Naga Students’ Union in Bangalore from 2007 to 2009, I feel an immense honor and nostalgia for the cherished memories created during that period. 

The ENSUB has stood as a resolute symbol of strength and perseverance, truly capturing our collective spirit in overcoming challenges while steadfastly upholding our core values. Since its inception, the union has been a vigorous advocate for academic excellence, simultaneously fostering peace and harmony within our diverse communities. Although we find ourselves miles away from our beloved homeland in pursuit of education and professional opportunities, the ENSUB has continuously served as a vital platform for personal growth, learning, and meaningful contributions to the wider world.

I extend my heartfelt wishes for your continued success in all your endeavors.

Long live the ENSUB!

Sincerely,
C. Khangyang Chang`}
            />

            <PresidentCard
              name="Dr. Rilipong"
              period="President (2013–2016)"
              image={Rilipong}
              message={`Serving as ENSUB's President was a profound honor, a tenure defined by our collective pursuit of epistemic empowerment. We cultivated not merely the students' organization, but a crucible for transformative leadership, where nascent ideas were forged into instruments of palpable change. ENSUB’s enduring legacy is this self-perpetuating ecosystem of excellence, a testament to the power of a shared vision meticulously nurtured.

Dr. Rilipong
President (2013–2016)`}
            />

            <PresidentCard
              name="Apongy Khiungrü"
              period="President (2021–2023)"
              image={Apongy}
              message={`It was one of the greatest honors of my life to serve as the President of the Eastern Nagaland Students’ Union Bengaluru (ENSUB) from 2021 to 2023. During this time, I had the privilege of witnessing how ENSUB stands as more than just a students’ union—it is a family, a community, and a movement. It is a place where unity is nurtured, academic excellence is encouraged, and our cultural heritage is preserved with pride.

ENSUB has always been a pillar of support not only for students but also for working professionals and the wider community. It has provided a platform where members come together to learn, grow, and contribute to the greater good. The progress and achievements of ENSUB are the result of the collective dedication, discipline, and selfless service of countless leaders, members, and well-wishers who have carried its legacy forward.

Apongy Khiungrü
President, ENSUB (2021–2023)`}
            />
          </div>
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Journey
        </h2>
        <div className="max-w-5xl mx-auto relative border-l-4 border-indigo-600">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              <div className="absolute w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -left-3.5 border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.year}
              </h3>
              <h4 className="text-lg text-indigo-600 font-medium">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- HIGHLIGHTS ---------------- */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-10"
          >
            ENSUB Journey Highlights (2023 – 2025)
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
