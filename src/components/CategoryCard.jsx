export default function CategoryCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition">
      <div className="text-2xl sm:text-3xl mb-3 sm:mb-5">
        {icon}
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
        {title}
      </h2>

      <p className="text-sm sm:text-base text-gray-500">
        {description}
      </p>
    </div>
  );
}