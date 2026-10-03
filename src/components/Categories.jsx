import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
        Complaint Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <CategoryCard
          icon="✨"
          title="Cleanliness"
          description="Report hygiene issues in coaches, platforms, washrooms or stations."
        />

        <CategoryCard
          icon="🎫"
          title="Ticketing"
          description="Issues with booking, refunds, overcharging or customer service."
        />

        <CategoryCard
          icon="⏰"
          title="Delays & Cancellations"
          description="Report unexpected delays, route changes or service cancellations."
        />
      </div>
    </section>
  );
}