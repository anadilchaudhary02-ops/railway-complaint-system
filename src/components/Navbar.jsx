import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "My Complaints", path: "/file-complaint" },
    { label: "Admin", path: "/admin" },
  ];

  return (
    <nav className="bg-white shadow-sm px-5 sm:px-8 py-4">

      {/* Top Row */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-blue-700 text-white p-2 rounded-lg text-sm sm:text-base">
            🚆
          </div>
          <h1 className="text-lg sm:text-2xl font-semibold">
            Railway Complaint Portal
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-700">
          {navLinks.map((link) => (
            <li
              key={link.path}
              className={`font-medium pb-1 ${
                pathname === link.path
                  ? "border-b-2 border-blue-700 text-blue-700"
                  : ""
              }`}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => navigate("/submit-complaint")}
          className="hidden md:block bg-blue-900 text-white px-4 lg:px-5 py-2 rounded-lg hover:bg-blue-800 text-sm lg:text-base transition"
        >
          + File Complaint
        </button>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-700 p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`font-medium px-2 py-1.5 rounded-lg ${
                pathname === link.path
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              navigate("/submit-complaint");
              setMenuOpen(false);
            }}
            className="mt-1 bg-blue-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 text-sm text-left transition"
          >
            + File Complaint
          </button>
        </div>
      )}

    </nav>
  );
}