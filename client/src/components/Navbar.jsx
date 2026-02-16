import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <span className="font-bold text-lg">Coding</span>
          </div>

          {/* Center - Links (Desktop) */}
          <div className="hidden md:flex space-x-10 font-medium">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Projects</a>
            <a href="#" className="hover:text-blue-500">Videos</a>
          </div>

          {/* Right - Social Icons (Desktop) */}
          <div className="hidden md:flex space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded"></div>
            <div className="w-8 h-8 bg-gray-800 rounded"></div>
            <div className="w-8 h-8 bg-sky-400 rounded"></div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center gap-4 py-4">

            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Videos</a>

            <div className="flex gap-3 pt-2">
              <div className="w-8 h-8 bg-red-500 rounded"></div>
              <div className="w-8 h-8 bg-gray-800 rounded"></div>
              <div className="w-8 h-8 bg-sky-400 rounded"></div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
