export default function Header() {
  return (
    <div className="mb-6 sm:mb-10">
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
          Admin Dashboard
        </h1>

        <span className="bg-amber-100 text-amber-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
       demo
        </span>
      </div>

      <p className="text-slate-500 mt-2 sm:mt-3 text-base sm:text-lg lg:text-xl">
        Overview of complaint activity and resolution metrics
      </p>
    </div>
  );
}