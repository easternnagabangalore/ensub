import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/ensub-logo.png";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
  { name: "Officials", to: "/officials" },
  { name: "Constitution", to: "/constitution" },
  // {name:"Events",to:"/events"}
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="ENSUB Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-lg md:text-xl font-bold text-ensub-dark">
                Eastern Nagaland Student Union Bengaluru
              </h1>
              <p className="text-xs tracking-wide text-indigo-700">
                We Strive, We Thrive
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100 " +
                  (isActive ? "text-indigo-700" : "text-gray-700")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-2 px-6 py-6 font-medium text-gray-700">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    "px-3 py-2 rounded-lg transition hover:bg-gray-100 " +
                    (isActive ? "text-indigo-700 font-semibold" : "")
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
