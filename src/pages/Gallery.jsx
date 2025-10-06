import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Auto-import all images from /assets/gallery
const images = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png}", { eager: true });

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  // Convert images object into an array
  const galleryImages = Object.values(images).map((img) => img.default);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-6 sm:px-10 lg:px-20 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4"
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          Celebrating our culture, unity, and unforgettable memories.
        </motion.p>
      </div>

      {/* Gallery Masonry Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="columns-2 sm:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto space-y-4"
      >
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            onClick={() => setSelected(src)}
          >
            <motion.img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full object-cover transform group-hover:scale-110 transition duration-500"
              whileHover={{ scale: 1.05 }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center text-white font-medium p-3">
              View Photo
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox with Animation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Selected"
              className="max-w-[90%] max-h-[80%] rounded-xl shadow-lg"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
