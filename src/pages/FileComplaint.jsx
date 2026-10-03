import { Link } from "react-router-dom";
import { Inbox } from "lucide-react";
import Navbar from "../components/Navbar";
export default function FileComplaint() {
  const complaints = [];

  return (
  <div><Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-rose-50">
      {/* Header */}
      <div className="px-8 py-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">My Complaints</h1>
            <p className="text-slate-500 mt-1">Track the status of your filed complaints</p>
          </div>
          <Link to="/file-complaint">
            <button className="bg-blue-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-800 flex items-center gap-2">
              + New
            </button>
          </Link>
        </div>
      </div>

      {/* Empty State */}
      {complaints.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-32 gap-4">
          <Inbox className="text-slate-300 w-16 h-16" />
          <p className="text-slate-400 text-lg">No complaints yet. File one to get started.</p>
        </div>
      )}
    </div>
    </div>
  );
}