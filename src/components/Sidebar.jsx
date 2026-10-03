import { useState } from "react";
import { LayoutDashboard, FileText, Users, BarChart2, Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, active: true },
    { label: "Complaints", icon: <FileText size={18} /> },
    { label: "Users", icon: <Users size={18} /> },
    { label: "Reports", icon: <BarChart2 size={18} /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-900 text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-40
          h-full md:h-auto
          w-64
          bg-white shadow-lg p-6
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 mt-10 md:mt-0">
          Admin Panel
        </h2>

        <ul className="space-y-2 sm:space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                item.active
                  ? "bg-blue-900 text-white"
                  : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}