import FilterButtons from "./FilterButtons";

export default function ComplaintsTable({ activeFilter, setActiveFilter }) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-5 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold">
          All Complaints
        </h2>

        <FilterButtons>
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        </FilterButtons>
      </div>

      <hr />

      <div className="flex justify-center items-center h-48 sm:h-60 lg:h-72">
        <p className="text-slate-400 text-lg sm:text-xl lg:text-2xl text-center px-4">
          No complaints to display
        </p>
      </div>
    </div>
  );
}