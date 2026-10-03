export default function FilterButtons({ activeFilter, setActiveFilter }) {
  const filters = ["All", "Pending", "In Progress", "Resolved"];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base transition ${
            activeFilter === filter
              ? "bg-blue-900 text-white"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}