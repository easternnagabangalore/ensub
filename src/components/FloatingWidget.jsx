// src/components/FloatingWidget.jsx
import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  X,
  MessageSquare
} from "lucide-react";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* Buttons (show when open) */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2 animate-fadeIn">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918310532954"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-500 rounded-full shadow-lg hover:scale-110 transform transition duration-300"
          >
            <MessageCircle size={22} className="text-white" />
          </a>

          {/* Phone */}
          <a
            href="tel:+918310532954"
            className="p-3 bg-blue-500 rounded-full shadow-lg hover:scale-110 transform transition duration-300"
          >
            <Phone size={22} className="text-white" />
          </a>

          {/* Email */}
          <a
            href="mailto:easternnagabangalore@gmail.com"
            className="p-3 bg-yellow-500 rounded-full shadow-lg hover:scale-110 transform transition duration-300"
          >
            <Mail size={22} className="text-white" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/easternnagalandstudentsunion?igsh=NTVrcDBuemRkbnJr&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-full shadow-lg hover:scale-110 transform transition duration-300"
          >
            <Instagram size={22} className="text-white" />
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-ensub-red rounded-full shadow-xl hover:rotate-12 transform transition-all duration-300"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageSquare size={24} className="text-white" />
        )}
      </button>
    </div>
  );
}
