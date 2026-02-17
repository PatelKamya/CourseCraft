import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "Projects", "Videos"];

  return (
    <nav className="w-full bg-slate-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
<span className="font-bold text-lg">CourseCraft</span>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex gap-12 font-medium">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`relative pb-1 ${
                  active === item ? "text-black" : "text-gray-600"
                }`}
              >
                {item}
                {active === item && (
                  <span className="absolute left-0 -bottom-1 w-full bg-blue-500" />
                )}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex gap-4">
            <div className="flex gap-4 pt-2">
  <NotificationsIcon />
  <AccountCircleIcon />
</div>

            {/* <TwitterIcon className="text-sky-400 cursor-pointer" /> */}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center gap-4 py-4">

            {links.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className="font-medium"
              >
                {item}
              </button>
            ))}

            {/* Right Icons */}
{/* Right Icons */}
<div className="hidden md:flex items-center gap-4">

  <NotificationsIcon className="cursor-pointer text-gray-700 hover:text-blue-500" />

  <AccountCircleIcon className="cursor-pointer text-gray-700 hover:text-blue-500" />

</div>


          </div>
        </div>
      )}
    </nav>
  );
}
