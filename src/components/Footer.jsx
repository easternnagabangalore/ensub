export default function Footer() {
  return (
    <footer className="mt-20 bg-ensub-dark text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg mb-2">Eastern Nagaland Student Union Bengaluru</h3>
          <p className="text-sm text-gray-400">Fostering unity, culture, and academic excellence among students from Eastern Nagaland in Bengaluru.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/events">Events</a></li>
            <li><a className="hover:underline" href="/gallery">Gallery</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About this Webiste</h4>
          <p className="text-sm text-gray-300">This website was initiated and launched under the leadership of David Chang, President (Term 2023-2025, 2025-2027, with development support from a full-stack developer based in Bangalore</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
      Copyright © {new Date().getFullYear()} ENSUB. All rights reserved.
      Made with ❤️ for our community.
      </div>
    </footer>
  );
}