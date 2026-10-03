import { ArrowLeft, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ComplaintForm() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 py-6 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft size={16} className="sm:hidden" />
          <ArrowLeft size={18} className="hidden sm:block" />
          Back
        </button>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-3">
          File a Complaint
        </h1>

        <p className="text-slate-500 mb-6 sm:mb-10 text-base sm:text-lg">
          Fill in the details below. We'll track it for you.
        </p>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-5 sm:p-6 lg:p-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-slate-300 rounded-xl p-2.5 sm:p-3 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="john@email.com"
                className="w-full border border-slate-300 rounded-xl p-2.5 sm:p-3 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Category
            </label>
            <select className="w-full border border-slate-300 rounded-xl p-2.5 sm:p-3 text-sm sm:text-base">
              <option>Select category</option>
              <option>Cleanliness</option>
              <option>Ticketing</option>
              <option>Delays & Cancellations</option>
              <option>Staff Behaviour</option>
            </select>
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Subject
            </label>
            <input
              type="text"
              placeholder="Brief subject of your complaint"
              className="w-full border border-slate-300 rounded-xl p-2.5 sm:p-3 text-sm sm:text-base"
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe the issue in detail..."
              className="w-full border border-slate-300 rounded-xl p-2.5 sm:p-3 resize-none text-sm sm:text-base"
            />
          </div>

          <div className="mb-6 sm:mb-8">
            <label className="block mb-2 sm:mb-3 font-medium text-sm sm:text-base">
              Attach Photo (Optional)
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 sm:p-10 text-center">
              <Image
                className="mx-auto text-slate-400 mb-3 sm:mb-4"
                size={32}
              />
              <p className="text-slate-600 text-sm sm:text-base">
                Click to upload or drag image here
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                PNG, JPG up to 5MB
              </p>
            </div>
          </div>

          <button className="w-full bg-blue-900 text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-800 text-sm sm:text-base transition">
            Submit Complaint
          </button>

        </div>
      </div>
    </div>
  );
}