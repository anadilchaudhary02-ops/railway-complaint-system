export default function StatCard({ title, count, icon, iconBg }) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm">
      <div
        className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 sm:mt-5 lg:mt-6">
        {count}
      </h2>

      <p className="text-sm sm:text-base text-slate-500 mt-1.5 sm:mt-2">
        {title}
      </p>
    </div>
  );
}