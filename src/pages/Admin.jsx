import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsGrid from "../components/StatsGrid";
import ComplaintsTable from "../components/ComplaintsTable";

export default function Admin() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex min-h-screen bg-slate-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Header />

        <StatsGrid />

        <ComplaintsTable
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>

    </div>
  );
}