import { useState } from "react";

// Auto import all official images
const images = import.meta.glob("../assets/officials/*.{png,jpg,jpeg}", { eager: true });

const getImage = (filename) => {
  return images[`../assets/officials/${filename}`]?.default;
};

const sections = [
  {
    title: "",
    members: [
      { role: "President", name: "Mr. David Chang", img: getImage("president.jpg") },
      { role: "Vice President", name: "Mr. Loungtok Konyak", img: getImage("vice-president.jpg") },
      { role: "General Secretary", name: "Mr. Yimtee Chang", img: getImage("general-secretary.jpg") },
      { role: "Asst. General Secretary", name: "Mr. Avi Chen", img: getImage("asst-general-secretary.jpg") },
      { role: "Finance Secretary", name: "Miss. Ashik Konyak", img: getImage("finance-secretary.jpg") },
      { role: "Asst. Finance Secretary", name: "Miss. Muthanghongla M", img: getImage("asst-finance-secretary.jpg") },
      { role: "Games & Sports Secretary", name: "Mr. Wangyao N", img: getImage("games-sports-secretary.jpg") },
      { role: "Asst. Games & Sports Secretary", name: "Mr. Lenvothong", img: getImage("asst-games-sports-secretary.jpg") },
      { role: "Cultural Secretary", name: "Miss. Athula Yimkhiung", img: getImage("cultural-secretary.jpg") },
      { role: "Information & Literary Secretary", name: "Miss. Berila Yimchunger", img: getImage("info-literary-secretary.jpg") },
      { role: "Treasurer", name: "Miss. Sashirenla Chang", img: getImage("treasurer.jpg") },
    ],
  },
  {
    title: "Tribal Representatives",
    members: [
      { role: "Chang", name: "Mr. Akhang Chang", img: getImage("chang-rep.jpg") },
      { role: "Phom", name: "Mr. Mopa H Nymth", img: getImage("phom-rep.jpg") },
      { role: "Konyak", name: "Mr. Chingshen Konyak", img: getImage("konyak-rep.jpg") },
      { role: "Khiamniungan", name: "Mr. Sento", img: getImage("khiamniungan-rep.jpg") },
      { role: "Sangtam", name: "Mr. Vitsali Sangtam", img: getImage("sangtam-rep.jpg") },
      { role: "Tikhir", name: "Mr. Vitsumong Vizz", img: getImage("tikhir-rep.jpg") },
      { role: "Yimkhiung", name: "Miss. Tiala", img: getImage("yimkhiung-rep.jpg") },
    ],
  },
  {
    title: "Advisory Board",
    members: [
      { role: "Advisor", name: "Mr. Apongy Quinkru", img: getImage("advisor-apongy.jpg") },
      { role: "Advisor", name: "Mr. Hopeson Konyak", img: getImage("advisor-hopeson.jpg") },
      { role: "Advisor", name: "Mr. Nyeiwang Phom", img: getImage("advisor-nyeiwang.jpg") },
      { role: "Advisor", name: "Miss. Khumjila", img: getImage("advisor-khumjila.jpg") },
    ],
  },
  {
    title: "Executive Board",
    members: [
      { role: "Executive", name: "Mr. Denzel", img: getImage("exec-denzel.jpg") },
      { role: "Executive", name: "Mr. Tachei Konyak", img: getImage("exec-tachei.jpg") },
      { role: "Executive", name: "Mr. Sangli Chang", img: getImage("exec-sangli.jpg") },
      { role: "Executive", name: "Miss. Yingliomei", img: getImage("exec-yingliomei.jpg") },
      { role: "Executive", name: "Mr. Zikyumong", img: getImage("exec-zikyumong.jpg") },
      { role: "Executive", name: "Mr. Zuvlenki", img: getImage("exec-zuvlenki.jpg") },
    ],
  },
];

export default function Officials() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        ENSUB Officials 2025-2027
      </h1>

      <div className="space-y-10">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-600">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.members.map((member, idx) => (
                <div key={idx}>
                  <li
                    onClick={() =>
                      setSelected(
                        selected?.role === member.role ? null : member
                      )
                    }
                    className={`cursor-pointer px-4 py-2 rounded-md border transition duration-200 
                    ${
                      selected?.role === member.role
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:bg-purple-600 transition"
                        : "bg-white hover:bg-gray-50 border-gray-200"
                    }`}
                  >
                    <span className="font-medium">{member.role}</span>
                  </li>

                  {/* Inline Profile Card */}
                  {selected?.role === member.role && (
                    <div className="mt-3 mb-6 flex flex-col items-center border p-4 rounded-lg shadow bg-gray-50">
                      {member.img && (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow mb-3"
                        />
                      )}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
